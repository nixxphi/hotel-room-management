
import Joi from 'joi';
import validate from '../middleware/validate.middleware.js';

const roomsValidationSchema = {
  body: Joi.object({
name: Joi.string().required(),
    description: Joi.string(),
    price: Joi.number(),
    amenities: Joi.string(),
    image: Joi.string(),
    isAvailable: Joi.boolean()
  })
};

const roomsValidationMiddleware = validate(roomsValidationSchema);

export default roomValidator;
