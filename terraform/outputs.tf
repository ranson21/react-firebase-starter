output "repo_url" {
  value = google_sourcerepo_repository.react_firebase_starter.url
}

output "app_id" {
  value = google_firebase_web_app.react_firebase_starter.app_id
}

output "api_key" {
  value = data.google_firebase_web_app_config.basic.api_key
}

output "sender_id" {
  value = lookup(data.google_firebase_web_app_config.basic, "messaging_sender_id", "")
}

output "measurement_id" {
  value = lookup(data.google_firebase_web_app_config.basic, "measurement_id", "")
}
