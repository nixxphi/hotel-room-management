import { Router } from 'express'; 
import roomController from '../controllers/room.controller.js'; 

// CREATE A NEW ROUTER INSTANCE
const roomRouter = Router();

// POST endpoint for creating a new room
roomRouter.post('/', roomController.createRoom);

// GET endpoint for fetching all rooms
roomRouter.get('/', roomController.getRoomsByFilter);

// GET endpoint for fetching a single room by ID
roomRouter.get('/:id', roomController.getARoom);

// PATCH endpoint for updating a room by ID
roomRouter.patch('/:id', roomController.updateRoomById);

// DELETE endpoint for deleting a room by ID
roomRouter.delete('/:id', roomController.deleteRoomById);

export default roomRouter;