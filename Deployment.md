# Frontend Deployment

## 1. Prepare the Frontend for Deployment

    Add environment variables to the React app (e.g., backend API URL).
    Push the frontend code to GitHub.

## 2. Deploy on Render

    Create a Static Site on Render and connect it to your GitHub repository.
    During setup, configure the build command (npm run build) and the publish directory (build).

## 3. Post-Deployment Tasks

    Test the deployed site to ensure all functionality is working correctly.
    Update the backend's CORS settings to include the frontend URL:
      CORS_ALLOWED_ORIGINS = [
    <"https://your-frontend-url.onrender.com">
]

## Additional Notes

## Troubleshooting

    - If the deployment fails, check the Render logs for detailed error messages.
    - Common issues:
        - Missing or incorrect environment variables.
        - Incorrect database configuration.
        - Backend API not accessible from the frontend.

## Verify Deployment

    - Test the entire application (backend and frontend) to ensure all features are functioning as expected.
