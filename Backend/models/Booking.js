import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId:{
type: mongoose.Schema.Types.ObjectId,
ref: "User"
},
carId:{
    type: mongoose.Schema.Types.ObjectId,
ref: "Car"
},
startDate: Date,
  endDate: Date,
  totalAmount: Number,
status: { type: String, default: "confirmed" }
})
export default mongoose.model("Booking", bookingSchema)