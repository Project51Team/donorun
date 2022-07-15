resource "aws_elasticache_cluster" "this" {
  cluster_id           = var.service_name
  apply_immediately    = true
  engine               = "redis"
  node_type            = "cache.t2.micro"
  parameter_group_name = "default.redis6.x"
  engine_version       = "6.2"
  num_cache_nodes      = 1
  port                 = 6379
  subnet_group_name    = aws_elasticache_subnet_group.this.name
  security_group_ids   = [aws_security_group.elasticache.id]

  tags = var.default_tags
}

resource "aws_elasticache_subnet_group" "this" {
  name       = var.service_name
  subnet_ids = module.vpc.public_subnets

  tags = var.default_tags
}

resource "aws_security_group" "elasticache" {
  name   = "${var.service_name}-elasticache"
  vpc_id = module.vpc.vpc_id

  tags = var.default_tags
}

resource "aws_security_group_rule" "elasticache_ingress" {
  security_group_id = aws_security_group.elasticache.id
  type              = "ingress"
  from_port         = 6379
  to_port           = 6379
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "elasticache_egress" {
  security_group_id = aws_security_group.elasticache.id
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks       = ["0.0.0.0/0"]
}
