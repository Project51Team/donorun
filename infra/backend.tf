terraform {
  required_version = "~> 1.0"
  backend "s3" {
    bucket = "donorun-tf-state-storage"
    key    = "donorun.tfstate"
    region = "us-east-2"
  }
}
