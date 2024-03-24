
import Joi from 'joi';
import validate from '../middleware/validate.middleware.js';

const roomTypeValidationSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    star_rank: Joi.number(),
    description: Joi.string(),
    price: Joi.number().required(),
  })
};

const roomTypeValidationMiddleware = validate(roomTypeValidationSchema);

export default roomTypeValidator;
