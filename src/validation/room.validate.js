
import Joi from 'joi';
import validate from '../middlewares/validate.middleware.js';

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

const roomValidator = validate(roomsValidationSchema);

export default roomValidator;
