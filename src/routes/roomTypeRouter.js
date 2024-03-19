import express from 'express';
import { Router } from 'express';
import * as roomTypeController from '../controllers/roomTypeController';
import { asyncHandler } from '../../../utils';
import authMiddleware from '../middlewares/authMiddleware';
import authorizationMiddleware from '../middlewares/authorizationMiddleware';
import validationMiddleware from '../middlewares/validationMiddleware';
import Joi from 'joi';

// Adding validation schema for creating a new room type
const roomTypeSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string(),
  price: Joi.number(),
  amenities: Joi.string(),
  image: Joi.string(),
  isAvailable: Joi.boolean()
});

// POST endpoint for creating a new room type
router.post('/api/v1/room-types', 
  authMiddleware,
  authorizationMiddleware,
  validationMiddleware(roomTypeSchema),
  roomTypeController.createRoomType
);

const router = Router();

// POST endpoint for creating room types
router.post('/api/v1/room-types', asyncHandler(roomTypeController.createRoomType));

// GET endpoint for fetching all room types
router.get('/api/v1/room-types', asyncHandler(roomTypeController.getAllRoomTypes));

// GET endpoint for getting a room type by ID
router.get('/api/v1/room-types/:id', asyncHandler(roomTypeController.getRoomTypeById));

// PATCH endpoint for updating a room type by ID
router.patch('/api/v1/room-types/:id', asyncHandler(roomTypeController.updateRoomTypeById));

// DELETE endpoint for deleting a room type by ID
router.delete('/api/v1/room-types/:id', asyncHandler(roomTypeController.deleteRoomTypeById));

export default router;
