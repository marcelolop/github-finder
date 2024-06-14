# GitHub Finder

GitHub Finder is a React application designed to search for GitHub users and display their profile information and repositories.

## Table of Contents

- [GitHub Finder](#github-finder)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Installation](#installation)
  - [Technologies Used](#technologies-used)
  - [API Usage](#api-usage)
  - [Deployment](#deployment)
  - [Contributing](#contributing)
  - [License](#license)

## Overview

GitHub Finder is a single-page application built using React.js that leverages the GitHub API to fetch and display user profiles and their repositories. It consists of two main pages/components: **Search** and **User**.

- **Search Page**: Allows users to input a GitHub username and submit a form to search for that user.
- **User Page**: Displays detailed information about the GitHub user, including their avatar, bio, statistics (followers, following, public repositories), and a list of their repositories.

The application utilizes React Router for navigation between the Search and User pages, axios for making HTTP requests to the GitHub API, and Framer Motion for smooth page transitions.

## Features

- **Search Page**:
  - Input field to enter a GitHub username.
  - Form submission to search for the entered username.
  - Error handling for non-existent users or failed API requests.

- **User Page**:
  - Detailed user profile including avatar, username, bio, statistics (followers, following, public repositories), and additional information (location, blog, company, etc.).
  - List of repositories with details such as name, description, stars, forks, and last updated date.

- **Navigation and Transition**:
  - Smooth transitions between pages using Framer Motion animations.

## Installation

To run the GitHub Finder application locally, follow these steps:

1. Clone the repository:
2. Install dependencies:
3. Create a `.env` file in the root directory and add your GitHub personal access token:

Once installed, you can start the application:

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies Used

- React.js
- React Router DOM
- Axios
- Framer Motion
- CSS (with CSS Modules for scoped styling)

## API Usage

The GitHub API is utilized to fetch user profiles and repositories:

- **User endpoint**: `https://api.github.com/users/${user}`
- **List of repos endpoint**: `https://api.github.com/users/${user}/repos`

Make sure to replace `${user}` with the actual GitHub username you want to fetch.

## Deployment

The application is deployed and hosted using Vercel. You can access the live version of the application [here](https://githubfinder-m-dev.vercel.app/).

## Contributing

Contributions are welcome! Feel free to open issues and pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.