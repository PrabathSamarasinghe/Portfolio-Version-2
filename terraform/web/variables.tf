variable "cloudflare_api_token" {
  description = "Cloudflare API token"
  type        = string
  sensitive   = true
}

variable "cloudflare_account_id" {
  description = "Cloudflare account ID"
  type        = string
}

variable "project_name" {
  description = "Cloudflare Pages project name"
  type        = string
  default     = "prabaths"
}

variable "production_branch" {
  description = "Production branch for Cloudflare Pages"
  type        = string
  default     = "main"
}