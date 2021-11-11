variable "project_id" {}
variable "user" {}
variable "region" {}
variable "firebase_location" {}

variable "billing_account" {
  description = "Billing account display name"
}

variable "repository_name" {
  default = "react-firebase-starter"
}

variable "project_name" {
  default = "React Firebase Starter"
}
