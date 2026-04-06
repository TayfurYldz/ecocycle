# EcoCycle
## Introduction
EcoCycle is a social media platform designed to promote environmental sustainability and connect individuals who share a passion for eco-friendly living.
## Features
* User profiles and authentication
* Post creation and sharing
* Commenting and liking
* Real-time notifications
* Environmental impact tracking
## Installation
1. Clone the repository: `git clone https://github.com/your-username/ecocycle.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`
## Usage
1. Create an account: `POST /api/auth/register`
2. Login: `POST /api/auth/login`
3. Create a post: `POST /api/posts`
4. Get all posts: `GET /api/posts`
## API Endpoints
* `POST /api/auth/register`: Create a new user account
* `POST /api/auth/login`: Login to an existing account
* `POST /api/posts`: Create a new post
* `GET /api/posts`: Get all posts
* `GET /api/posts/:id`: Get a single post by ID
* `PUT /api/posts/:id`: Update a post
* `DELETE /api/posts/:id`: Delete a post
## Configuration
* `PORT`: Server port (default: 3000)
* `MONGO_URI`: MongoDB connection string
## Testing
* Run unit tests: `npm test`
* Run integration tests: `npm run test:integration`
## Deployment
* Deploy to production: `npm run deploy`