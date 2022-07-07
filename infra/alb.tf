resource "aws_s3_bucket" "alb_access_logs" {
  bucket_prefix = "donorun-alb-access-logs"
  acl           = "private"
  versioning {
    enabled = false
  }
  lifecycle_rule {
    enabled = true
    expiration {
      days = 7
    }
  }
  force_destroy = true
  tags          = var.default_tags
}

data "aws_iam_policy_document" "alb_access_logs" {
  statement {
    effect = "Allow"

    principals {
      type        = "AWS"
      identifiers = [data.aws_elb_service_account.default.arn]
    }

    actions = [
      "s3:PutObject",
    ]

    resources = [
      "${aws_s3_bucket.alb_access_logs.arn}/*",
    ]
  }
}

resource "aws_s3_bucket_policy" "default" {
  bucket = aws_s3_bucket.alb_access_logs.id
  policy = data.aws_iam_policy_document.alb_access_logs.json
}

module "alb" {
  source  = "terraform-aws-modules/alb/aws"
  version = "7.0.0"

  name = "donorun-alb"

  load_balancer_type = "application"

  vpc_id          = module.vpc.vpc_id
  subnets         = module.vpc.public_subnets
  security_groups = [aws_security_group.alb.id]

  access_logs = {
    bucket = "donorun-alb-access-logs"
  }

  target_groups = [
    {
      name                 = "donorun-containers"
      backend_protocol     = "HTTP"
      backend_port         = 8080
      target_type          = "ip"
      deregistration_delay = 5
      health_check = {
        enabled             = true
        path                = "/actuator/health"
        interval            = 60
        healthy_threshold   = 2
        unhealthy_threshold = 3
        protocol            = "HTTP"
        matcher             = "200-399"
      }
    }
  ]

  https_listeners = [
    {
      port               = 443
      protocol           = "HTTPS"
      certificate_arn    = aws_acm_certificate_validation.this.certificate_arn
      target_group_index = 0
    }
  ]

  http_tcp_listeners = [
    {
      port        = 80
      protocol    = "HTTP"
      action_type = "redirect"
      redirect = {
        port        = "443"
        protocol    = "HTTPS"
        status_code = "HTTP_301"
      }
    }
  ]

  tags = var.default_tags
}

resource "aws_security_group" "alb" {
  name   = "donurun-alb"
  vpc_id = module.vpc.vpc_id
  tags   = var.default_tags
}

resource "aws_security_group_rule" "alb_ingress_http" {
  security_group_id = aws_security_group.alb.id
  type              = "ingress"
  from_port         = 80
  to_port           = 80
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "alb_ingress_https" {
  security_group_id = aws_security_group.alb.id
  type              = "ingress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "alb_egress_http" {
  security_group_id = aws_security_group.alb.id
  type              = "egress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "alb_egress_https" {
  security_group_id = aws_security_group.alb.id
  type              = "egress"
  from_port         = 8080
  to_port           = 8080
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
}
