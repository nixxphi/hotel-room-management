# Learnable task X
---

# Hotel Rooms Management System

This project is a Hotel Rooms Management System built with Node.js, Express.js, and MongoDB. It provides a backend API for managing rooms and room types in a hotel.

## Features

- Create, read, update, and delete (CRUD) operations for rooms and room types
- Fetch rooms with optional filters (search, room type, price range)
- Error handling middleware for handling server errors gracefully
- Environment configuration using dotenv for managing environment variables
- Integration with MongoDB database, express and Winston logger.

## Installation
The API key is "learnable.task.X"

1. Clone the repository:
   ```bash
   git clone https://github.com/nixxphi/hotelRooms.git
   ```

2. Install dependencies:
   ```bash
   npm install winston
   npm install mongoose
   npm install express
   npm install nodemon
   npm install chai sinon --save-dev
   npm install mocha 
   ```
3. The dotenv file includes the following
   - PORT=5000
   - MONGODB_URI=mongodb+srv://nixxphi:this.is.the@redcluster.pixh5su.mongodb.net/?retryWrites=true&w=majority&appName=Redcluster

4. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Room Types

- **POST /api/v1/roomTypes**: Create a new room type
- **GET /api/v1/roomTypes**: Get all room types
- **GET /api/v1/roomTypes/:id**: Get a room type by ID
- **PATCH /api/v1/roomTypes/:id**: Update a room type by ID
- **DELETE /api/v1/roomTypes/:id**: Delete a room type by ID

### Rooms

- **POST /api/v1/rooms**: Create a new room
- **GET /api/v1/rooms**: Get all rooms with optional filters
- **GET /api/v1/rooms/:id**: Get a room by ID
- **PATCH /api/v1/rooms/:id**: Update a room by ID
- **DELETE /api/v1/rooms/:id**: Delete a room by ID

## Folder Structure

```

hotelRooms/
│
├── src/
│   ├── controllers/
│   │   ├── roomTypeController.js
│   │   └── roomController.js
│   │
│   ├── models/
│   │   ├── RoomType.js
│   │   └── Room.js
│   │
│   ├── routes/
│   │   ├── roomTypeRouter.js
│   │   └── roomRouter.js
│   │
│   ├── services/
│   │   └── roomService.js
│   │
│   ├── validations/
│   │   └── api-key-validator.js
│   │
│   ├── utils/
│   │   └── logger.js
|   |    └── utils.js
│   │
│   └── server.js
│
├── .env
├── package.json
└── README.md

```
## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- Winston logger
- Chai sinon
- Mocha


## Authors

- Igwenagu Chukwuma
