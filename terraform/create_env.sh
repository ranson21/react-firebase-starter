#!/bin/bash

# Add the Vault Secrets to the environment
cat >>../.env << EOF
# Set the Node ENV
export NODE_ENV="development"

# Set the Application Client ID
export API_KEY=$(gcloud secrets versions access latest --secret="firebase-api-key")
export SENDER_ID=$(gcloud secrets versions access latest --secret="firebase-sender-id")
export APP_ID=$(gcloud secrets versions access latest --secret="firebase-app-id")

# Project settings
export PROJECT_ID=$$TF_VAR_project_id
export _RELEASE="dev"
EOF