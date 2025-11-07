import mongoose from "mongoose";

const carschema = new mongoose.Schema({
    name:{
       type: String,
        required : true
    },
    brand:{
        type: String,
        required : true
    }, 
    model:{
        type: String,
        required : true
    },
    fuelType: {
      type: String,
      required: true,
    },
    
    pricePerDay:{type: Number, 
    required: true 
    },
    images: {
      type: [String], // array of image URLs
      required: true,
    },
    available: {
      type: Boolean,
      default: true,
    },
}, {timestamps})

export default mongoose.model("Car", carschema)