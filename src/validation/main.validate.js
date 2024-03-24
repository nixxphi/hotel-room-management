
import userValidator from './user.validate.js';
import roomValidator from './room.validate.js';
import roomTypeValidator from './roomType.validator';

// Define the main validator object
const validator = {
  userValidator,
  roomValidator,
  roomTypeValidator
};

// Exporting the validator 
module.exports = validator;
