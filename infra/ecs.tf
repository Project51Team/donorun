locals {
  port_mappings = [{
    containerPort : 8080,
    hostPort : 8080,
    protocol : "tcp"
  }]
  port_mappings_json_encoded = jsonencode(local.port_mappings)
}
resource "aws_ecs_cluster" "this" {
  name = var.service_name

  capacity_providers = ["FARGATE", "FARGATE_SPOT"]

  setting {
    name  = "containerInsights"
    value = "enabled"
  }

  default_capacity_provider_strategy {
    capacity_provider = "FARGATE"
    weight            = 100
  }

  tags = var.default_tags
}

resource "aws_ecs_service" "this" {
  name                              = var.service_name
  cluster                           = aws_ecs_cluster.this.arn
  platform_version                  = "LATEST"
  task_definition                   = aws_ecs_task_definition.this.arn
  desired_count                     = var.containers_desired_count
  health_check_grace_period_seconds = var.health_check_grace_period
  enable_ecs_managed_tags           = true
  propagate_tags                    = "SERVICE"

  tags = var.default_tags

  network_configuration {
    subnets         = module.vpc.private_subnets
    security_groups = [aws_security_group.these_containers.id]
  }

  load_balancer {
    container_port   = 8080
    target_group_arn = module.alb.target_group_arns[0]
    container_name   = "donorun"
  }

  capacity_provider_strategy {
    capacity_provider = "FARGATE"
    weight            = 0
    base              = 0
  }

  capacity_provider_strategy {
    capacity_provider = "FARGATE_SPOT"
    weight            = 100
    base              = 1
  }
}

resource "aws_ecs_task_definition" "this" {
  family                   = var.service_name
  requires_compatibilities = ["FARGATE"]
  network_mode             = "awsvpc"
  cpu                      = var.per_container_cpu
  memory                   = var.per_container_memory
  task_role_arn            = aws_iam_role.this.arn
  execution_role_arn       = aws_iam_role.execution_role.arn
  tags                     = var.default_tags
  container_definitions    = <<CONTDEF
[
  {
    "name": "${var.service_name}",
    "image": "${aws_ecr_repository.this.repository_url}:latest",
    "essential": true,
    "cpu": 0,
    "mountPoints": [],
    "volumesFrom": [],
    "portMappings": ${local.port_mappings_json_encoded},
    "environment": ${local.task_env_vars_json_encoded},
    "healthCheck": {
        "command": [
          "CMD-SHELL",
          "wget --spider http://127.0.0.1:8080/actuator/health || exit 1"
        ],
        "interval": 30,
        "timeout": 5,
        "retries": 10,
        "startPeriod": 120
    },
    "secrets": ${local.task_secrets_json_encoded},
    "logConfiguration": {
        "logDriver": "awslogs",
        "options": {
          "awslogs-create-group": "true",
          "awslogs-group": "awslogs-donorun",
          "awslogs-region": "us-east-1",
          "awslogs-stream-prefix": "awslogs-donorun-containers"
        }
    }
  }
]
CONTDEF
}

resource "aws_security_group" "these_containers" {
  name        = "${var.service_name}-containers"
  description = "Ingress/egress for ${var.service_name} containers"
  vpc_id      = module.vpc.vpc_id
}

resource "aws_security_group_rule" "these_containers_ingress_http" {
  security_group_id        = aws_security_group.these_containers.id
  type                     = "ingress"
  from_port                = 8080
  to_port                  = 8080
  protocol                 = "tcp"
  source_security_group_id = aws_security_group.alb.id
}

resource "aws_security_group_rule" "these_containers_egress_https" {
  security_group_id = aws_security_group.these_containers.id
  type              = "egress"
  from_port         = 443
  to_port           = 443
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "dns_tcp" {
  security_group_id = aws_security_group.these_containers.id
  type              = "egress"
  from_port         = 53
  to_port           = 53
  protocol          = "tcp"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "dns_udp" {
  security_group_id = aws_security_group.these_containers.id
  type              = "egress"
  from_port         = 53
  to_port           = 53
  protocol          = "udp"
  cidr_blocks       = ["0.0.0.0/0"]
}

resource "aws_security_group_rule" "these_containers_egress_all" {
  security_group_id = aws_security_group.these_containers.id
  type              = "egress"
  from_port         = 0
  to_port           = 0
  protocol          = "-1"
  cidr_blocks       = ["0.0.0.0/0"]
}
