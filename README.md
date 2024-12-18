# Frontend for CWTProject

## Overview

This is the frontend for the CWTProject, a test blog application designed for a trading company. The frontend is built with React, using Vite for development, and communicates with a backend API for data handling.

## Features

    - User authentication with per-tab sessions using - - sessionStorage.
    - Create, view, and manage blog posts.
    - Redirects based on authentication state.
    - Error handling with user-friendly messages.

## Technologies Used

    - React: Component-based UI.
    - Vite: Fast development server and build tool.
    - Axios: For API communication.
    - React Router: Navigation and routing.
    - Bootstrap: For UI styling.

## Getting Started

### Prerequisites

Make sure you have the following installed:

    - Node.js (>= 16.x)
    - npm or yarn

### Installation

#### 1. Clone the repository

    - git clone <https://github.com/Urch1234/CWTBlog.git>
    - cd CWTBlog

#### 2. Install Dependencies

    - npm install vite@latest
    - npm install

## Running the Development Server

### Start the development server

    - npm run dev
    - Ensure your backend API is up and running before testing the frontend locally.

## Architecture Overview

### Folder Structure

src/
├── components/      # Reusable components
├── pages/           # Application pages (e.g., Register, PostCreation)
├── utils/           # Utility functions (e.g., API setup)
├── App.jsx          # Main application entry
├── main.jsx         # React DOM rendering
└── styles/          # Global styles and assets

### Key Components

    _ Authentication: Managed per tab using sessionStorage.
     
    _ Routing: React Router handles navigation between pages (e.g., /register, /    _ posts).
     
    _ API Integration: Axios is configured with interceptors for authentication and error handling.

### Workflow

1. User Authentication:

    - Login credentials are validated via the backend API.

    - Tokens are stored in sessionStorage for per-tab session management.

2. Post Management:

    - Users can create, view, and manage blog posts.

    - API endpoints are used to fetch and modify post data.

3. Error Handling:

    - User-friendly error messages are displayed for API or application errors.

### Scripts

    - npm run dev: Start the development server.
    - npm run build: Build for production.
    - npm run preview: Preview the production build - locally.

### Deploy to Render

Log in to your Render account and create a new Static Site.

Connect the frontend repository to the site.

Set the build command and publish directory:

Build Command: npm run build

Publish Directory: dist

Add the required environment variable:

<!-- Key: VITE_API_BASE_URL

Value: <https://cwtblog.onrender.com/api> -->

Deploy the site and wait for the build to complete.

### Contributing

Contributions are welcome! To get started:

    Fork this repository.
    Create a new branch (git checkout -b feature-name).
    Commit your changes (git commit -m 'Add feature-name').
    Push the branch (git push origin feature-name).
    Open a Pull Request.
