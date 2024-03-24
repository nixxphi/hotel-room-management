import { Router } from 'express'; 
 import roomTypeController from '../controllers/roomType.controller.js'; 
 import '../middlewares/authenticate.middleware.js'; 
 import '../middlewares/authorize.Middleware.js'; 
 import '../middlewares/validationMiddleware.js'; 
  
 const roomTypeRouter = Router(); 
  
 // POST endpoint for creating a new room type 
 roomTypeRouter.post('/',  
   roomTypeController.createRoomType 
 ); 
  
 // GET endpoint for fetching all room types 
 roomTypeRouter.get('/', roomTypeController.getAllRoomTypes); 
  
 // GET endpoint for getting a room type by ID 
 roomTypeRouter.get('/:id', roomTypeController.getRoomTypeById); 
  
 // PATCH endpoint for updating a room type by ID 
 roomTypeRouter.patch('/:id', roomTypeController.updateRoomTypeById); 
  
 // DELETE endpoint for deleting a room type by ID 
 roomTypeRouter.delete('/:id', roomTypeController.deleteRoomTypeById); 
  
 export default roomTypeRouter;
