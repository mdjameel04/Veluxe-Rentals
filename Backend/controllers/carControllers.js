import Car from '../models/Car.js'

export const addCar = async (req,res)=>{
    try {
        const newCar = new Car(req.body);
        await newCar.save()
        res.status(201).json({message:"Car added successfully", car:newCar})
    } catch (error) {
        res.status(500).json({message: "Failed to add car", error: error.message })
    }
}

export const getCars = async (req,res)=>{
 try {
    const cars = await Car.find();
     res.status(200).json(cars);
 } catch (error) {
     res.status(500).json({ message: "Failed to fetch cars", error: error.message });
 }
}

export const getCarsById = async (req,res)=>{
    try {
        const car = await Car.findById(req.params.id);
          if (!car) return res.status(404).json({ message: "Car not found" });
    res.status(200).json(car);
    } catch (error) {
     res.status(500).json({ message: "Error fetching car", error: error.message });   
    }
} 