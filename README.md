# XeroCodee Dashboard

![Image description](https://github.com/AshishSharma03/xerocodee-dashboard/blob/main/public/Assets/Architecture.png)



## Overview

This project leverages various technologies and libraries to achieve its goals:

- **Next.js**: Used for building the frontend of the application.
- **Next-auth**: Implemented for authentication and Single Sign-On (SSO) capabilities.
- **Redis (via @upstash/redis)**: Utilized as a data store for caching and other data-related tasks.
- **Axios**: Employed for making HTTP requests to external services or APIs.
- **bcryptjs**: Ensures secure password hashing and verification.
- **jsonwebtoken**: Used for generating and verifying JSON Web Tokens (JWT) for user authentication.
- **Mongoose**: Enables interaction with MongoDB for database operations.
- **Nodemailer**: Provides email sending capabilities within the application.(in progress implementation)

## Description


## Features

- Authentication with Different Providers
- Single Sign-On (SSO) based Authorization WorkOS and Auth0 (In Development)

### Approch 


## Getting Started

Follow these steps to get your development environment set up:

1. Clone this repository.
2. Install the required dependencies using `npm install` or `yarn`.
3. Set up your environment variables, 

#### Environment Variables

- `GITHUB_ID`: GitHub OAuth Client ID
- `GITHUB_SECRET`: GitHub OAuth Client Secret
- `GOOGLE_CLIENT_ID`: Google OAuth Client ID
- `GOOGLE_CLIENT_SECRET`: Google OAuth Client Secret
- `NEXTAUTH_URL`: Next.js Application URL
- `NEXTAUTH_SECRET`: Next.js Authentication Secret
- `MONGODB_URI`: MongoDB Connection URI
- `JWT_SECRET`: JSON Web Token Secret
- `UPSTASH_REDIS_URL`: Upstash Redis URL
- `UPSTASH_REDIS_TOKEN`: Upstash Redis Token
- `WORKOS_CLIENT_ID`: WorkOS Client ID
- `WORKOS_API_KEY`: WorkOS API Key

4. Start the development server using `npm run dev` or `yarn run dev`.


## Authentication

This project uses Next-auth for authentication and WorkOS for  Single Sign-On (SSO). Make sure to configure your authentication and SSO settings properly.

## Improvements

**SSO Enhancements**: Focus on improving Single Sign-On (SSO) with WorkOS and Auth0, including troubleshooting, error handling, monitoring, documentation, testing, and dependency updates.

**UI Enhancement**: The current UI is attractive, but consider:
- **Responsive Design**: Support various screen sizes.
- **Creative Elements**: Add creative touches for a visually engaging interface.


## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive messages.
4. Push your changes to your fork.
5. Submit a pull request to the main repository's `main` branch.


## License

NA

## Acknowledgments

NA
