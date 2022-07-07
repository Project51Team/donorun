terraform {
  required_version = "~> 1.0"
  backend "s3" {
    bucket = "donorun-tf-state-storage"
    key    = "donorun-infra.tfstate"
    region = "us-east-1"
  }
}
