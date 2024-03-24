
const userValidator = require('./user.validate.js';
import roomValidator from './room.validate.js';
const roomTypeValidator = require('./roomType.validator');

// Define the main validator object
const validator = {
  userValidator,
  roomValidator,
  roomTypeValidator
};

// Exporting the validator 
module.exports = validator;
