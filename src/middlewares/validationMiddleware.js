
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
