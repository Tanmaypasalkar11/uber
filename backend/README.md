Backend API Documentation

/users/register Endpoint

Description

Registers a new user by creating a user account with the provided information.

HTTP Method

POST

Request Body

The request body should be in JSON format and include the following fields:

fullname (object): firstname (string, required): User's first name (minimum 3 characters). lastname (string, optional): User's last name (minimum 3 characters). email (string, required): User's email address (must be a valid email). password (string, required): User's password (minimum 6 characters). Example Response

user (object): fullname (object). firstname (string): User's first name (minimum 3 characters). lastname (string): User's last name (minimum 3 characters). email (string): User's email address (must be a valid email). password (string): User's password (minimum 6 characters). token (String): JWT Token /users/login Endpoint

Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

HTTP Method

POST

Endpoint

/users/login

Request Body

The request body should be in JSON format and include the following fields:

email (string, required): User's email address (must be a valid email). password (string, required): User's password (minimum 6 characters). Example Response

user (object): fullname (object). firstname (string): User's first name (minimum 3 characters). lastname (string): User's last name (minimum 3 characters). email (string): User's email address (must be a valid email). password (string): User's password (minimum 6 characters). token (String): JWT Token /users/profile Endpoint

Description

Retrieves the profile information of the currently authenticated user.

HTTP Method

GET

Authentication

Requires a valid JWT token in the Authorization header: Authorization: Bearer

Example Response

user (object): fullname (object). firstname (string): User's first name (minimum 3 characters). lastname (string): User's last name (minimum 3 characters). email (string): User's email address (must be a valid email). /users/logout Endpoint

Description

Logout the current user and blacklist the token provided in cookie or headers

HTTP Method

GET

Authentication

Requires a valid JWT token in the Authorization header or cookie:

user (object): fullname (object). firstname (string): User's first name (minimum 3 characters). lastname (string): User's last name (minimum 3 characters). email (string): User's email address (must be a valid email). password (string): User's password (minimum 6 characters). token (String): JWT Token## /captains/register Endpoint Description

Registers a new captain by creating a captain account with the provided information.

HTTP Method

POST

Request Body

The request body should be in JSON format and include the following fields:

fullname (object): firstname (string, required): Captain's first name (minimum 3 characters) lastname (string, optional): Captain's last name email (string, required): Captain's email address (must be a valid email) password (string, required): Captain's password (minimum 6 characters) vehicle (object): color (string, required): Vehicle color (minimum 3 characters) plate (string, required): Vehicle plate number (minimum 3 characters) capacity (number, required): Vehicle passenger capacity (minimum 1) vehicleType (string, required): Type of vehicle (must be 'car', 'motorcycle', or 'auto')

# User API Documentation

## Endpoints

### Register User

- **URL:** `/users/register`
- **Method:** `POST`
- **Description:** Register a new user.
- **Request Body:**
  - `email` (string): User's email.
  - `password` (string): User's password.
  - `fullName` (object): User's full name.
    - `firstName` (string): User's first name.
    - `lastName` (string): User's last name.
- **Response:**
  - `token` (string): Authentication token.
  - `user` (object): User's information.
- **Error Response:**
  - `400 Bad Request`: Validation errors or user already exists.

### Login User

- **URL:** `/users/login`
- **Method:** `POST`
- **Description:** Login a user.
- **Request Body:**
  - `email` (string): User's email.
  - `password` (string): User's password.
- **Response:**
  - `token` (string): Authentication token.
  - `user` (object): User's information.
- **Error Response:**
  - `400 Bad Request`: Validation errors.
  - `401 Unauthorized`: Invalid email or password.

### Get User Profile

- **URL:** `/users/profile`
- **Method:** `GET`
- **Description:** Get the authenticated user's profile.
- **Headers:**
  - `Authorization` (string): Bearer token.
- **Response:**
  - `user` (object): User's profile information.
- **Success Response:**
  ```json
  {
    "user": {
      "_id": "60d0fe4f5311236168a109ca",
      "firstName": "John",
      "lastName": "Doe",
      "email": "john.doe@example.com"
    }
  }
  ```
- **Error Response:**
  - `401 Unauthorized`: Only authenticated users can access the data.

### Logout User

- **URL:** `/users/logout`
- **Method:** `POST`
- **Description:** Logout the authenticated user.
- **Headers:**
  - `Authorization` (string): Bearer token.
- **Response:**
  - `message` (string): Logout successful message.
- **Success Response:**
  ```json
  {
    "message": "Logout successful"
  }
  ```
- **Error Response:**
  - `500 Internal Server Error`: The server encountered an unexpected condition.

# Captain API Documentation

## Endpoints

### Register Captain

- **URL:** `/captains/register`
- **Method:** `POST`
- **Description:** Register a new captain.
- **Request Body:**
  ```json
  {
    "fullname": {
      "firstname": "John", // string, required, minimum 3 characters
      "lastname": "Doe" // string, optional, minimum 3 characters
    },
    "email": "john.doe@example.com", // string, required, must be a valid email
    "password": "password123", // string, required, minimum 8 characters
    "vehicle": {
      "color": "Red", // string, required, minimum 3 characters
      "plate": "XYZ123", // string, required, minimum 3 characters
      "capacity": 4, // number, required, minimum 1
      "vehicleType": "car" // string, required, must be 'bike', 'car', or 'auto'
    }
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token_here", // string, JWT token
    "captain": {
      "_id": "60d0fe4f5311236168a109ca",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```
- **Error Response:**
  - `400 Bad Request`: Validation errors or captain already exists.

### Login Captain

- **URL:** `/captains/login`
- **Method:** `POST`
- **Description:** Login a captain.
- **Request Body:**
  ```json
  {
    "email": "john.doe@example.com", // string, required, must be a valid email
    "password": "password123" // string, required, minimum 8 characters
  }
  ```
- **Response:**
  ```json
  {
    "token": "jwt_token_here", // string, JWT token
    "captain": {
      "_id": "60d0fe4f5311236168a109ca",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```
- **Error Response:**
  - `400 Bad Request`: Validation errors.
  - `401 Unauthorized`: Invalid email or password.

### Get Captain Profile

- **URL:** `/captains/profile`
- **Method:** `GET`
- **Description:** Get the authenticated captain's profile.
- **Headers:**
  - `Authorization` (string): Bearer token.
- **Response:**
  ```json
  {
    "captain": {
      "_id": "60d0fe4f5311236168a109ca",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ123",
        "capacity": 4,
        "vehicleType": "car"
      }
    }
  }
  ```
- **Error Response:**
  - `401 Unauthorized`: Only authenticated captains can access the data.

### Logout Captain

- **URL:** `/captains/logout`
- **Method:** `POST`
- **Description:** Logout the authenticated captain.
- **Headers:**
  - `Authorization` (string): Bearer token.
- **Response:**
  ```json
  {
    "message": "Logout successful"
  }
  ```
- **Error Response:**
  - `500 Internal Server Error`: The server encountered an unexpected condition.
