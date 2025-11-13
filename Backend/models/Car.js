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
    
    pricePerDay:{type: String, 
    required: true 
    },

   img: { type: String, required: true },
    available: {
      type: Boolean,
      default: true,
    },
}, {timestamps: true})

export default mongoose.model("Car", carschema)