import mongoose, { Schema } from "mongoose";

const userSchema = new  mongoose.Schema(
    {
        name:{
            type:String,
            required: [true, "Name is required"],
        },
       email :{
        type : String,
        required : [true, "email is required"],
        unique : true,
       },
       password: {
        type : String,
        required : [true, "password is required"],
        unique : true,
       },

       isAdmin:{
        type : Boolean,
        default: false
       }
    }, {timestamps: true})

    export default mongoose.model("User", userSchema)