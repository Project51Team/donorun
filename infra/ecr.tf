resource "aws_ecr_repository" "this" {
  name = "donorun"

  image_scanning_configuration {
    scan_on_push = true
  }
}
