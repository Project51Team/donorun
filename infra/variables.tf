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

variable "per_container_cpu" {
  description = "The CPU units for the instances that Fargate will spin up. Options here: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html#fargate-tasks-size."
  type        = number
  default     = 1024
}

variable "per_container_memory" {
  description = "The memory units for the instances that Fargate will spin up. Options here: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS_Fargate.html#fargate-tasks-size."
  type        = number
  default     = 2048
}

variable "containers_desired_count" {
  description = "Min copies of the container to run."
  type        = number
  default     = 0
}

variable "health_check_grace_period" {
  description = "Amount of time in sec to wait before triggering first health check"
  type        = number
  default     = 120
}

variable "ecs_roles" {
  type        = list(string)
  description = "The list of roles to be attached to ECS"
  # Example roles:
  # "arn:aws:iam::aws:policy/AmazonEC2FullAccess",
  # "arn:aws:iam::aws:policy/AmazonSQSFullAccess"
  default = []
}

variable "secrets_manager_access_policy" {
  description = "The policy used to provide an access to secrets manages"
  type        = string
  default     = ""
}

variable "secrets_manager_access_policies" {
  description = "The policies used to provide an access to secrets manages"
  type        = list(string)
  default     = []
}

variable "env_vars" {
  type    = map(string)
  default = {}
}

variable "secrets" {
  type        = map(string)
  description = "The secret variables to pass to the container."
  default     = {}
}
