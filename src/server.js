import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import roomTypeRouter from './src/routes/roomTypeRouter';
import roomRouter from './src/routes/roomRouter';
import userRouter from './src/routes/userRouter'; // Import userRouter
import { errorHandler, logger } from './src/utils';
import apiKeyValidator from './src/middleware/apiKeyValidator'; 
import authMiddleware from './src/middleware/authMiddleware'; // Import authMiddleware
import { userAuth } from './src/middleware/userAuth'; // Import userAuth middleware

// LOAD ENVIRONMENT VARIABLES FROM .ENV FILE
dotenv.config();

// CREATING EXPRESS APP
const app = express();

// INCLUDE CORS
app.use(cors());

// MIDDLEWARE
app.use(bodyParser.json());

// MONGODB CONNECTION
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  logger.info('Connected to MongoDB');
})
.catch((error) => {
  logger.error('Error connecting to MongoDB:', error);
});

// MIDDLEWARE TO VALIDATE API KEY FOR ALL ROUTES
app.use(apiKeyValidator);

// LOGGER MIDDLEWARE
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// ROUTES
app.use('/api/v1', roomTypeRouter);
app.use('/api/v1/rooms', roomRouter);
app.use('/api/v1/users', userRouter); // Add userRouter for user-related endpoints

// AUTHENTICATION MIDDLEWARE
app.use(authMiddleware);

// AUTHORIZATION MIDDLEWARE
app.use('/api/v1/rooms', userAuth); // Protect room routes with userAuth middleware

// ERROR HANDLING MIDDLEWARE
app.use(errorHandler);

// STARTING THE SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});
