
import Joi from 'joi';
import validate from '../middleware/validate.middleware.js';

const usersValidationSchema = {
  body: Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    role: Joi.string().valid('admin', 'guest').required(),
  })
};

const userValidationMiddleware = validate(userValidationSchema);

export default userValidator;
