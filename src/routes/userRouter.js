import express from 'express';
import { register, login } from '../controllers/userController';
import { asyncHandler } from '../utils/utils.js';

const router = express.Router();

// POST endpoint for user registration
router.post('/register', asyncHandler(register));

// POST endpoint for user login
router.post('/login', asyncHandler(login));

export default router;
