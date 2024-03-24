import { model, Schema } from 'mongoose' 
  
 const roomTypeSchema = new Schema({ 
     name: { 
         type: String, 
         required: true 
     },  
     description: {
        type: String
  },
     star_rank: {
     type:number
   },
     deleted: { 
         type: Boolean, 
         default: false 
     } 
 }, {timestamps: true}) 
  
 export default model('RoomType', roomTypeSchema)
