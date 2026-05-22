resource "cloudflare_pages_project" "frontend" {
  account_id        = var.cloudflare_account_id
  name              = var.project_name
  production_branch = var.production_branch
}