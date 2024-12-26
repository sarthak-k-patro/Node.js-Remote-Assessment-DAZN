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




# Movie Lobby API Documentation

### Base URL
`http://localhost:3000`

## Authentication Endpoints

### 1. Login User
- **Endpoint:** `POST /login`
- **Request Body:**
  ```json
  {
    "username": "john_doe",
    "password": "securepassword123"
  }
  ```
- **Response:**
  - **Success (200):**
    ```json
    {
      "token": "your_jwt_token"
    }
    ```
  - **Error (401):**
    ```json
    {
      "message": "Invalid credentials"
    }
    ```

## Movie Endpoints

### 2. Get All Movies
- **Endpoint:** `GET /movies`
- **Response:**
  - **Success (200):**
    ```json
    [
      {
        "_id": "676d2ca895679d2c94d911ac",
        "title": "Inception",
        "genre": "Science Fiction",
        "rating": 8.8,
        "streamingLink": "https://example.com/inception",
        "createdAt": "2023-01-01T00:00:00.000Z",
        "updatedAt": "2023-01-01T00:00:00.000Z"
      }
    ]
    ```

### 3. Search Movies
- **Endpoint:** `GET /search?q=<search_query>`
- **Response:**
  - **Success (200):**
    ```json
    [
      {
        "_id": "676d2ca895679d2c94d911ac",
        "title": "Inception",
        "genre": "Science Fiction",
        "rating": 8.8,
        "streamingLink": "https://example.com/inception"
      }
    ]
    ```
  - **Error (400):**
    ```json
    {
      "message": "Search query is required"
    }
    ```
  - **Error (404):**
    ```json
    {
      "message": "No Movie with '<search_query>' Title or Genre Exists."
    }
    ```

### 4. Add Movie
- **Endpoint:** `POST /movies`
- **Request Body:**
  ```json
  {
    "title": "Inception",
    "genre": "Science Fiction",
    "rating": 8.8,
    "streamingLink": "https://example.com/inception"
  }
  ```
- **Response:**
  - **Success (201):**
    ```json
    {
      "_id": "676d2ca895679d2c94d911ac",
      "title": "Inception",
      "genre": "Science Fiction",
      "rating": 8.8,
      "streamingLink": "https://example.com/inception",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-01T00:00:00.000Z"
    }
    ```
  - **Error (400):**
    ```json
    {
      "message": "Movie already exists"
    }
    ```

### 5. Update Movie
- **Endpoint:** `PUT /movies/:id`
- **Request Body:**
  ```json
  {
    "title": "Updated Title",
    "genre": "Updated Genre",
    "rating": 9.0,
    "streamingLink": "https://example.com/updated-inception"
  }
  ```
- **Response:**
  - **Success (200):**
    ```json
    {
      "_id": "676d2ca895679d2c94d911ac",
      "title": "Updated Title",
      "genre": "Updated Genre",
      "rating": 9.0,
      "streamingLink": "https://example.com/updated-inception",
      "createdAt": "2023-01-01T00:00:00.000Z",
      "updatedAt": "2023-01-02T00:00:00.000Z"
    }
    ```
  - **Error (404):**
    ```json
    {
      "message": "Movie not found"
    }
    ```

### 6. Delete Movie
- **Endpoint:** `DELETE /movies/:id`
- **Response:**
  - **Success:**
    ```json
    { "message": "Movie Removed"}
    ```
  - **Error (404):**
    ```json
    {
      "message": "Movie not found"
    }
    ```

### The End

