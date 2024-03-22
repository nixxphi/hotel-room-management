import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import { errorHandler } from './src/utils/utils.js';
import { logger } from './config/Winston.js';
import middlewareRouter from './routes/middlewareRouter.js'; // Import the middleware router

// Loading environment variables from .env file
dotenv.config();

// Creating an instance of the Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
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

// Logger middleware
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

// Attaching middleware router
app.use('/', middlewareRouter); // Remove '/routes/' from the path

// Error handling middleware
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  logger.info(`Server listening on port ${PORT}`);
});
