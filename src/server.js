 import "express-async-errors"; 
 import app from "./app.js"; 
 import { logger } from "./utils/logger.js"; 
  
 const PORT = process.env.PORT|| 5000; 
  
 app.listen(PORT, () => { 
   logger.info(`listening on port ${PORT}`); 
 })
