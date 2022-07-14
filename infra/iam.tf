resource "aws_iam_role" "this" {
  name               = var.service_name
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": "ecs-tasks.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "this-ecs" {
  role       = aws_iam_role.this.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_role_policy_attachment" "this-ecs-too" {
  role       = aws_iam_role.this.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonEC2FullAccess"
}

resource "aws_iam_role_policy_attachment" "this_ecs_aws_permissions_attach" {
  count      = length(var.ecs_roles)
  role       = aws_iam_role.this.name
  policy_arn = var.ecs_roles[count.index]
}

resource "aws_iam_role" "execution_role" {
  name               = "${var.service_name}-execution"
  assume_role_policy = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "",
      "Effect": "Allow",
      "Principal": {
        "Service": "ecs-tasks.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF
}

resource "aws_iam_role_policy_attachment" "execution_role_ecr" {
  role       = aws_iam_role.execution_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AmazonECSTaskExecutionRolePolicy"
}

resource "aws_iam_role_policy_attachment" "secrets_manager_access_role" {
  count      = length(local.secrets_manager_access_policies)
  role       = aws_iam_role.execution_role.name
  policy_arn = local.secrets_manager_access_policies[count.index]
}

locals {
  secrets_manager_access_policies = (length(var.secrets_manager_access_policy) > 0
  ? [var.secrets_manager_access_policy] : var.secrets_manager_access_policies)
}
