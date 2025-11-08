import Car from '../models/Car.js'
import Booking from '../models/Booking.js'

export const createBooking = async (req,res)=>{
    try {
        const {userId,carId, startDate, endDate } = req.body;
        //find car
        const car = await Car.findById(carId);
        if(!car) return res.status(404).json({ message: "Car not found" });
        //calucatiion
     const days = Math.ceil((new Date(endDate)- new Date(startDate))/ (1000*60*60*24))
     const totalPrice = days* car.pricePerDay

        const booking = new Booking({
      user: userId,
      car: carId,
      startDate,
      endDate,
      totalPrice
    });
     await booking.save();
    res.status(201).json({ message: "Booking successful", booking });
    } catch (error) {
      res.status(500).json({ message: "Booking failed", error: error.message });
    }
}
   
    export const getBookingsByUser = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.params.userId }).populate("car");
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings", error: error.message });
  }
};