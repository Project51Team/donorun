variable "default_tags" {
  type = map(string)
  default = {
    "coherent:owner"  = "MaksimUlyanov@coherentsolutions.com"
    "coherent:client" = "Coherent"
    Terraform         = "true"
  }
}
