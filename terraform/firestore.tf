resource "null_resource" "enable_firestore" {
  provisioner "local-exec" {
    command = "make firestore"
  }

  depends_on = [google_firebase_project_location.default]
}

# resource "google_firestore_index" "tasks_user" {
#   collection = "tasks"

#   fields {
#     field_path = "UserUuid"
#     order      = "ASCENDING"
#   }

#   fields {
#     field_path = "Name"
#     order      = "ASCENDING"
#   }

#   fields {
#     field_path = "Priority"
#     order      = "ASCENDING"
#   }

#   fields {
#     field_path = "Status"
#     order      = "ASCENDING"
#   }

#   fields {
#     field_path = "__name__"
#     order      = "ASCENDING"
#   }

#   depends_on = [null_resource.enable_firestore]
# }
