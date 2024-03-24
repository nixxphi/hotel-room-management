import { Router } from 'express';
import { register, login } from '../controllers/user.controller.js';

const userRouter = Router();

// POST endpoint for user registration
userRouter.post('/register', register);

// POST endpoint for user login
userRouter.post('/login', login);

export default userRouter;