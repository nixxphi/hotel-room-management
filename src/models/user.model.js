import { model, Schema } from 'mongoose';

const userSchema = new Schema({
    filename: {
        type: String,
        required: true
    },
    secure_url: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ['guest', 'admin'], // including options for guest or admin with default as guest.
        default: 'guest' 
    }
}, { timestamps: true });

export default model('User', userSchema);
