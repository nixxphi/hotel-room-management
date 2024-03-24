
import Joi from 'joi';
import validate from '../middlewares/validate.middleware.js';

const roomTypeValidationSchema = {
  body: Joi.object({
    name: Joi.string().required(),
    star_rank: Joi.number(),
    description: Joi.string(),
    price: Joi.number().required(),
  })
};

const roomTypeValidator = validate(roomTypeValidationSchema);

export default roomTypeValidator;
