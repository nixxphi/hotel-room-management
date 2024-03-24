/*
import Joi from 'joi';

const validationMiddleware = (req, res, next) => {
  const roomTypeSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string(),
    price: Joi.number(),
    amenities: Joi.string(),
    image: Joi.string(),
    isAvailable: Joi.boolean()
  });

  const { error } = roomTypeSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export default validationMiddleware;
If I could figure oit Joi fast enough, I'd use it 
*/
export default (schema) => 
   async (req, res, next) => { 
       if (schema.body)  
         req.body = await schema.body.validateAsync(req.body); 
  
       if (schema.query) { 
         req.query = await schema.query.validateAsync(req.query); 
       }   
  
       if (schema.params)  
         req.params = await schema.params.validateAsync(req.params); 
        
       next(); 
   }
