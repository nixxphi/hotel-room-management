import { model, Schema } from 'mongoose'

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
    }
}, {timestamps: true})

export default model('User', userSchema)