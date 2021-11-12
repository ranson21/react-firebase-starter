provider "google-beta" {
  project     = var.project_id
  region      = var.region
  credentials = base64decode(google_service_account_key.firebase_key.private_key)
}

resource "google_service_account" "firebase" {
  account_id   = "firebase"
  display_name = "FireBase Service Account"
  depends_on = [
    google_project_iam_member.owner,
    google_project_service.firebase,
  ]
}

resource "google_project_iam_member" "service_account_firebase_admin" {
  role    = "roles/editor"
  member  = "serviceAccount:${google_service_account.firebase.email}"
  project = var.project_id
}

resource "google_service_account_key" "firebase_key" {
  service_account_id = google_service_account.firebase.name
}

resource "google_firebase_project" "default" {
  provider = google-beta

  depends_on = [
    google_project_service.firebase,
    google_project_iam_member.service_account_firebase_admin,
  ]
}

resource "google_firebase_project_location" "default" {
  provider = google-beta

  location_id = var.firebase_location

  depends_on = [
    google_firebase_project.default,
  ]
}

resource "google_firebase_web_app" "react_firebase_starter" {
  provider     = google-beta
  display_name = var.project_name

  depends_on = [google_firebase_project.default]
}

data "google_firebase_web_app_config" "basic" {
  provider   = google-beta
  web_app_id = google_firebase_web_app.react_firebase_starter.app_id
}
