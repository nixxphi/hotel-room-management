import mongoose from 'mongoose';

// Define a new schema for rooms
const roomTypeSchema = new mongoose.Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'A perfect resting place for our weary guests.'
  },
  capacity: {
    type: Number,
    default: 2
  },
  beds: {
    type: Number,
    default: 1
  },
  price: {
    type: Number,
    default: 1000
  },
  amenities: {
    type: [String],
    default: []
  },
  image: {
    type: String,
    default: 'room.jpg'
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
});

// Adding a pre-save middleware to generate the ID before saving the document
roomTypeSchema.pre('save', async function (next) {
  // To generate the sequential ID
  const count = await RoomType.countDocuments();
  const paddedCount = String(count + 1).padStart(5, '0'); // Padding with zeros to ensure 5 digits cuz... HTR-1 doesn't look as good as HTR-00001.
  this.id = `HTR-${paddedCount}`;
  next();
});

// Creating the RoomType model
const RoomType = mongoose.model('RoomType', roomTypeSchema);

export default RoomType;
