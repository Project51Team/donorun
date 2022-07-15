data "aws_acm_certificate" "this" {
  domain   = "*.test.coherentprojects.net"
  statuses = ["ISSUED"]
}

data "aws_route53_zone" "this" {
  name = "test.coherentprojects.net"
}

resource "aws_acm_certificate_validation" "this" {
  certificate_arn = data.aws_acm_certificate.this.arn
}

resource "aws_route53_record" "this" {
  name    = "${var.service_name}.test.coherentprojects.net"
  type    = "A"
  zone_id = data.aws_route53_zone.this.zone_id

  alias {
    name                   = module.alb.lb_dns_name
    zone_id                = module.alb.lb_zone_id
    evaluate_target_health = true
  }
}

resource "aws_route53_record" "this" {
  name    = "redis.${var.service_name}.test.coherentprojects.net"
  type    = "CNAME"
  zone_id = data.aws_route53_zone.this.zone_id

  records = [aws_elasticache_cluster.this.cluster_address]
}
