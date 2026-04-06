# EcoCycle

EcoCycle is a social platform for reducing waste and promoting sustainable living. Users can share tips, participate in challenges, and connect with like-minded individuals to create a positive impact on the environment.

## Features
* User authentication and profiles
* Real-time discussion forums
* Challenge and event management
* Integration with popular calendar apps
* Personalized recommendations for sustainable living
* Community leaderboard and rewards

## Installation
1. Clone the repository: `git clone https://github.com/your-username/eco-cycle.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`

## Usage
1. Register an account: `POST /api/auth/register` with username, email, and password
2. Login: `POST /api/auth/login` with username and password
3. Create a new challenge: `POST /api/challenges` with challenge details
4. Participate in a challenge: `POST /api/challenges/:id/participate`
5. View community leaderboard: `GET /api/leaderboard`

## API Endpoints
* `GET /api/challenges`: Retrieve a list of all challenges
* `GET /api/challenges/:id`: Retrieve a specific challenge
* `POST /api/challenges`: Create a new challenge
* `PUT /api/challenges/:id`: Update a challenge
* `DELETE /api/challenges/:id`: Delete a challenge
* `GET /api/leaderboard`: Retrieve the community leaderboard

## Configuration
* `PORT`: The port number to listen on (default: 3000)
* `DB_URI`: The MongoDB connection string
* `CALENDAR_API_KEY`: The API key for calendar integration

## Testing
1. Run unit tests: `npm test`
2. Run integration tests: `npm run test:integration`

## Deployment
1. Build the Docker image: `docker build -t eco-cycle .`
2. Run the Docker container: `docker run -p 3000:3000 eco-cycle`