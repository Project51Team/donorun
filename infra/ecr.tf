resource "aws_ecr_repository" "this" {
  name = var.service_name

  image_scanning_configuration {
    scan_on_push = true
  }
}
