# Movie Lobby API

The Movie Lobby API is a complete RESTful API built with TypeScript, Express, and MongoDB. It allows users to manage a collection of movies, including functionalities for user authentication, movie addition, updating, deletion, and searching.

## Features

- User authentication with JWT
- Role-based access control (admin and user roles)
- CRUD operations for movies
- Search functionality for movies by title and genre
- Secure password storage using bcrypt

## Technologies Used

- **Node.js**: JavaScript runtime for building the API
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database for storing movie and user data
- **TypeScript**: Superset of JavaScript for type safety
- **JWT**: For secure user authentication
- **Bcrypt**: For hashing passwords
- **CORS**: For enabling Cross-Origin Resource Sharing

## Getting Started

### Prerequisites

- Node.js (latest stable recommended)
- MongoDB (local or cloud instance)
- npm (Node package manager)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/sarthak-k-patro/Node.js-Remote-Assessment-DAZN.git
   cd movie-lobby-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:

   ```plaintext
   MONGODB_URI=<your_mongodb_connection_string>
   JWT_SECRET=<your_jwt_secret>
   PORT=3000
   ```

### Running the Application

1. **Start MongoDB**: Ensure your MongoDB server is running. If you are using a local instance, you can start it with:
    MongoDB Compass which is GUI for easy manipulation of databases

2. **Run the application in development mode**:

   ```bash
   npm run dev
   ```

3. **Build the application for production**:

   ```bash
   npm run build
   ```

4. **Start the built application**:

   ```bash
   npm start
   ```

### Available Scripts

- `npm run dev`: Starts the application in development mode.
- `npm run build`: Compiles TypeScript files to JavaScript in the `dist` directory.
- `npm start`: Runs the compiled JavaScript application.

## API Endpoints

### Authentication

- **POST** `/login`: Authenticates a user and returns a JWT.

### Movies

- **GET** `/movies`: Retrieves all movies.
- **GET** `/search`: Searches for movies by title or genre.
- **POST** `/movies`: Adds a new movie (admin only).
- **PUT** `/movies/:id`: Updates an existing movie (admin only).
- **DELETE** `/movies/:id`: Deletes a movie (admin only).

#### Example Movie Object Created using MongoDB Compass

```json
{
  "_id": {
    "$oid": "676d2ca895679d2c94d911ac"
  },
  "title": "Inception",
  "genre": "Science Fiction",
  "rating": 8.8,
  "streamingLink": "https://example.com/inception"
}
```

#### Example User Object

```json
{
  "username": "john_doe",
  "password": "securepassword123",
  "role": "admin"
}
```

## Error Handling

The API includes error handling middleware that returns a `500` status code for internal server errors.


This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

Thanks to the contributors and the open-source community for their support and resources.

