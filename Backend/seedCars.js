import mongoose from "mongoose";
import dotenv from "dotenv"
import Car from "./models/Car.js";
import connectedDb from "./config/db.js";

dotenv.config()

connectedDb()

const cars = [
  { name: "Audi a3", img: "img1", brand: "Audi", model: "Sedans", fuelType: "Petrol", pricePerDay: 120 },
  { name: "Audi q2", img: "img2", brand: "Audi", model: "Suvs", fuelType: "Diesel", pricePerDay: 150 },
  { name: "Audi TT", img: "img3", brand: "Audi", model: "Sports", fuelType: "Petrol", pricePerDay: 200 },
  { name: "Audi R8", img: "img4", brand: "Audi", model: "Sports", fuelType: "Petrol", pricePerDay: 300 },
  { name: "Audi q5", img: "img5", brand: "Audi", model: "Suvs", fuelType: "Diesel", pricePerDay: 180 },

  { name: "Bmw 3", img: "img6", brand: "BMW", model: "Sedans", fuelType: "Petrol", pricePerDay: 130 },
  { name: "Bmw 7", img: "img7", brand: "BMW", model: "Sedans", fuelType: "Petrol", pricePerDay: 220 },
  { name: "Bmw x3", img: "img8", brand: "BMW", model: "Suvs", fuelType: "Diesel", pricePerDay: 170 },
  { name: "Bmw m2", img: "img9", brand: "BMW", model: "Sports", fuelType: "Petrol", pricePerDay: 250 },

  { name: "Lamborghini Huracán", img: "img10", brand: "Lamborghini", model: "Sports", fuelType: "Petrol", pricePerDay: 450 },
  { name: "Lamborghini Revuelto", img: "img11", brand: "Lamborghini", model: "Sports", fuelType: "Petrol", pricePerDay: 500 },
  { name: "Lamborghini Urus", img: "img12", brand: "Lamborghini", model: "Sports", fuelType: "Petrol", pricePerDay: 400 },
];




const seedCars = async () => {
  try {
    await Car.deleteMany(); // optional: clears existing cars
    const result = await Car.insertMany(cars);
    console.log(`✅ Successfully inserted ${result.length} cars!`);
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding cars:", error);
    process.exit(1);
  }
};

seedCars();