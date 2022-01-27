data "google_billing_account" "account" {
  display_name = var.billing_account
}

provider "google" {
  project = var.project_id
  region  = var.region
}

resource "google_project" "project" {
  name                = var.project_name
  project_id          = var.project_id
  billing_account     = data.google_billing_account.account.id
  auto_create_network = false
}

resource "google_project_iam_member" "owner" {
  role    = "roles/owner"
  member  = "user:${var.user}"
  project = var.project_id

  depends_on = [google_project.project]
}

resource "google_project_iam_member" "secret_accessor" {
  role    = "roles/secretmanager.secretAccessor"
  member  = "user:${var.user}"
  project = var.project_id

  depends_on = [google_project_service.cloud_build]
}

resource "google_project_service" "compute" {
  service    = "compute.googleapis.com"
  depends_on = [google_project.project]
}

resource "google_project_service" "secretmanager" {
  # provider   = google-beta
  service    = "secretmanager.googleapis.com"
  depends_on = [google_project.project]
}


resource "google_project_service" "container_registry" {
  service    = "containerregistry.googleapis.com"
  depends_on = [google_project.project]

  disable_dependent_services = true
}

resource "google_project_service" "cloud_build" {
  service    = "cloudbuild.googleapis.com"
  depends_on = [google_project.project]
}

resource "google_project_service" "firebase" {
  service    = "firebase.googleapis.com"
  depends_on = [google_project.project]

  disable_dependent_services = true
}

resource "google_project_service" "firestore" {
  service    = "firestore.googleapis.com"
  depends_on = [google_project.project]
}

resource "google_project_service" "source_repo" {
  service    = "sourcerepo.googleapis.com"
  depends_on = [google_project.project]
}
