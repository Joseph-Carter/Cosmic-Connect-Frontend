# Cosmic Connect Frontend

This is the frontend codebase for Cosmic Connect, a platform for sharing posts and connecting users interested in cosmic topics.

## Table of Contents

- [Description](#description)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Pages and Components](#pages-and-components)
- [Routes](#routes)
- [Contributing](#contributing)
- [Backend](https://github.com/Joseph-Carter/Cosmic-Connect-Backend)
- [Deployed Site](https://cosmicconnect.netlify.app/)
- [Deployed Backend Site](https://cosmic-connect.onrender.com)


## Description

The Cosmic Connect frontend is built using React, allowing users to log in, sign up, create, edit, view, and delete posts related to cosmic topics. The application uses React Router for navigation and context API for state management.

## Tech Stack

- React
- React Router
- Context API
- [Trello](https://trello.com/b/nThGIXLg/cosmic-connect)

## Folder Structure

Cosmic-Connect-Frontend/
- ├── public/
- ├── src/
- │ ├── Components/
- │ │ ├── UserAuth/
- │ │ │ ├── LoginForm.jsx
- │ │ │ ├── SignUpForm.jsx
- │ │ │ ├── UserContext.jsx
- │ │ │ └── ...
- │ ├── Pages/
- │ ├── App.js
- │ ├── index.js
- │ ├── index.css
- ├── .gitignore
- ├── package.json
- ├── README.md


## Getting Started

To get started with the Cosmic Connect frontend, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the development server with `npm run dev`.

## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm run build`: Builds the app for production to the `build` folder.
- `npm test`: Launches the test runner in the interactive watch mode.

## Pages and Components

### Pages

- **Auth:** Handles user authentication and login/signup forms.
- **PostIndex:** Displays a list of posts for a user.
- **New:** Allows users to create a new post.
- **Show:** Displays details of a specific post.
- **Edit:** Enables users to edit existing posts.
- **Error:** Displays a 404 error page for unavailable routes.

### Components

The Components folder contains various reusable UI components used across different pages.

## Routes

- `/login`: Login page for existing users.
- `/signup`: Signup page for new users.
- `/users/:userId/posts`: User's posts index.
- `/users/:userId/posts/:postId`: Details of a specific post.
- `/users/:userId/posts/new`: Form to create a new post.
- `/users/:userId/posts/:postId/edit`: Form to edit an existing post.
- `/*`: 404 Error page.

## Contributing

Contributions are welcome! If you encounter any issues or wish to enhance the functionality, feel free to open a pull request.

