resource "aws_elasticache_cluster" "this" {
  cluster_id           = var.service_name
  replication_group_id = aws_elasticache_replication_group.this.id

  tags = var.default_tags
}

resource "aws_elasticache_replication_group" "this" {
  apply_immediately    = true
  replication_group_id = "tf-rep-group-1"
  description          = "donorun cache replication group"
  engine_version       = "6.2"
  node_type            = "cache.t2.micro"
  parameter_group_name = "default.redis6.x"
  port                 = 6379
  subnet_group_name    = aws_elasticache_subnet_group.this.name

  tags = var.default_tags
}

resource "aws_elasticache_subnet_group" "this" {
  name       = var.service_name
  subnet_ids = module.vpc.public_subnets

  tags = var.default_tags
}
