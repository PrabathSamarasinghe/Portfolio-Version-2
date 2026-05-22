output "frontend_url" {
  description = "Cloudflare Pages default URL"
  value       = "https://${cloudflare_pages_project.frontend.name}.pages.dev"
}