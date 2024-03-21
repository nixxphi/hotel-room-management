import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import roomTypeRouter from './routes/roomTypeRouter.js';
import roomRouter from './routes/roomRouter.js';
import userRouter from './routes/userRouter.js'; 
import { errorHandler, logger } from './src/utils/utils.js';
import authMiddleware from './middlewares/authMiddleware.js';
import { userAuth } from './middlewares/userAuthjs'; 

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
  console.log('Connected to MongoDB');
})
.catch((error) => {
  logger.error('Error connecting to MongoDB:', error);
  console.log('Error connecting to MongoDB');
});

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
  console.log(`Server listening on port ${PORT}`);
  logger.info(`Server listening on port ${PORT}`);
});
