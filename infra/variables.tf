variable "default_tags" {
  type = map(string)
  default = {
    "coherent:owner"  = "MaksimUlyanov@coherentsolutions.com"
    "coherent:client" = "Coherent"
    Terraform         = "true"
  }
}

variable "service_name" {
  type    = string
  default = "donorun"
}

variable "main_cidr_block" {
  type    = string
  default = "10.0.0.0/16"
}

variable "private_subnets_cidr" {
  type = list(string)
  default = [
    "10.0.1.0/24",
    "10.0.2.0/24",
    "10.0.3.0/24"
  ]
}

variable "public_subnets_cidr" {
  type = list(string)
  default = [
    "10.0.101.0/24",
    "10.0.102.0/24",
    "10.0.103.0/24"
  ]
}
