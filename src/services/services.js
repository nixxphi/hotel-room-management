import RoomType from './models/RoomType';
import Room from './models/room.js';
import User from './models/user.js';

// SERVICE FUNCTIONS FOR MANAGING ROOM TYPES
const roomTypeService = {
  async createRoomType(name) {
    const newRoomType = new RoomType({ name });
    return await newRoomType.save();
  },

  async getAllRoomTypes() {
    return await RoomType.find();
  },

  async getRoomTypeById(id) {
    return await RoomType.findById(id);
  },

  async updateRoomType(id, newName) {
    return await RoomType.findByIdAndUpdate(id, { name: newName }, { new: true });
  },

  async deleteRoomType(id) {
    return await RoomType.findByIdAndDelete(id);
  }
};

// SERVICE FUNCTIONS FOR MANAGING ROOMS
const roomService = {
  async createRoom(name, roomType, price) {
    const newRoom = new Room({ name, roomType, price });
    return await newRoom.save();
  },

  async getAllRooms() {
    return await Room.find();
  },

  async getRoomById(id) {
    return await Room.findById(id);
  },

  async updateRoom(id, newName, newPrice) {
    return await Room.findByIdAndUpdate(id, { name: newName, price: newPrice }, { new: true });
  },

  async deleteRoom(id) {
    return await Room.findByIdAndDelete(id);
  }
};

// SERVICE FUNCTIONS FOR MANAGING USERS
const userService = {
  async createUser(username, password, role) {
    const newUser = new User({ username, password, role });
    return await newUser.save();
  },

  async getAllUsers() {
    return await User.find();
  },

  async getUserById(id) {
    return await User.findById(id);
  },

  async updateUser(id, newData) {
    return await User.findByIdAndUpdate(id, newData, { new: true });
  },

  async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }
};

export { roomTypeService, roomService, userService };
