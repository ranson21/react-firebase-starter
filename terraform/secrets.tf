# Create a secret for local-admin-password
resource "google_secret_manager_secret" "firebase_api_key" {
  # provider  = google-beta
  project   = var.project_id
  secret_id = "firebase-api-key"
  replication {
    automatic = true
  }

  depends_on = [google_project_iam_member.secret_accessor, null_resource.enable_firestore]
}

resource "google_secret_manager_secret" "firebase_app_id" {
  # provider  = google-beta
  secret_id = "firebase-app-id"
  replication {
    automatic = true
  }

  depends_on = [google_project_iam_member.secret_accessor, null_resource.enable_firestore]
}

resource "google_secret_manager_secret" "firebase_sender_id" {
  # provider = google-beta

  secret_id = "firebase-sender-id"
  replication {
    automatic = true
  }

  depends_on = [google_project_iam_member.secret_accessor, null_resource.enable_firestore]
}

# Add the secret data for local-admin-password secret
resource "google_secret_manager_secret_version" "firebase_app_id" {
  # provider = google-beta

  secret      = google_secret_manager_secret.firebase_app_id.id
  secret_data = google_firebase_web_app.react_firebase_starter.app_id

  depends_on = [google_firebase_web_app.react_firebase_starter, google_secret_manager_secret.firebase_app_id]
}

# Add the secret data for local-admin-password secret
resource "google_secret_manager_secret_version" "firebase_api_key" {
  # provider = google-beta

  secret      = google_secret_manager_secret.firebase_api_key.id
  secret_data = data.google_firebase_web_app_config.basic.api_key

  depends_on = [google_firebase_web_app.react_firebase_starter, google_secret_manager_secret.firebase_api_key]
}

# Add the secret data for local-admin-password secret
resource "google_secret_manager_secret_version" "firebase_sender_id" {
  # provider = google-beta

  secret      = google_secret_manager_secret.firebase_sender_id.id
  secret_data = lookup(data.google_firebase_web_app_config.basic, "messaging_sender_id", "")

  depends_on = [google_firebase_web_app.react_firebase_starter, google_secret_manager_secret.firebase_sender_id]
}
