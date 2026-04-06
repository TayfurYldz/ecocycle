# EcoCycle

EcoCycle is a web application designed to facilitate recycling and reduce waste in local communities. The platform allows users to find nearby recycling centers, track their recycling progress, and connect with other eco-conscious individuals.

## Features
* User authentication and authorization
* Recycling center directory with Google Maps integration
* Personalized recycling tracking and progress monitoring
* Social features for connecting with other users
* Admin dashboard for managing recycling centers and user data

## Installation
1. Clone the repository: `git clone https://github.com/username/ecocycle.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Usage
1. Register as a user: `POST /api/users` with JSON body containing `username`, `email`, and `password`
2. Login as a user: `POST /api/login` with JSON body containing `username` and `password`
3. Get nearby recycling centers: `GET /api/recycling-centers` with query parameter `location`

## API Endpoints
* `GET /api/recycling-centers`: Retrieve a list of nearby recycling centers
* `POST /api/users`: Create a new user account
* `POST /api/login`: Login to an existing user account
* `GET /api/user`: Retrieve the current user's profile information
* `PUT /api/user`: Update the current user's profile information

## Configuration
* `DB_HOST`: PostgreSQL database host
* `DB_USER`: PostgreSQL database username
* `DB_PASSWORD`: PostgreSQL database password
* `DB_NAME`: PostgreSQL database name
* `GOOGLE_MAPS_API_KEY`: Google Maps API key

## Testing
* Run unit tests: `npm test`
* Run integration tests: `npm run test:integration`

## Deployment
* Deploy to Heroku: `heroku deploy`
* Deploy to Docker: `docker build -t ecocycle .` followed by `docker run -p 3000:3000 ecocycle`