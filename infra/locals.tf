# Add service tag to all infra
# Make avm service dashboard with alb, ecs, events, logs, apm
locals {

  task_env_vars = merge({
    SPRING_PROFILES_ACTIVE = "prod"
  }, var.env_vars)

  # Sort environment variables so terraform will not try to recreate on each plan/apply
  sorted_task_env_vars_keys = sort(keys(local.task_env_vars))

  sorted_task_secret_keys = sort(keys(var.secrets))

  task_env_vars_json_encoded = jsonencode([for key in local.sorted_task_env_vars_keys :
    {
      name  = key
      value = lookup(local.task_env_vars, key)
    }
  ])

  task_secrets_json_encoded = jsonencode([for key in local.sorted_task_secret_keys :
    {
      name      = key
      valueFrom = lookup(var.secrets, key)
    }
  ])
}

