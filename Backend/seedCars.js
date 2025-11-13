import mongoose from "mongoose";
import dotenv from "dotenv"
import Car from "./models/Car.js";
import connectedDb from "./config/db.js";

dotenv.config()

connectedDb()

const cars = [
  { name: "Audi a3",   img:"/cars/Audi-a3.jpg", brand: "Audi", model: "Sedans", fuelType: "Petrol", pricePerDay: "₹5000" },
  { name: "Audi q3",  img:"/cars/Audi-Q2.jpg", brand: "Audi", model: "Suvs", fuelType: "Diesel", pricePerDay: "₹6000" },
  { name: "Audi TT",  img:"/cars/Audi-tt.jpg", brand: "Audi", model: "Sports", fuelType: "Petrol", pricePerDay: "₹4000" },
  { name: "Audi R8", img:"/cars/Audi-r8.jpg", brand: "Audi", model: "Sports", fuelType: "Petrol", pricePerDay: "₹8000" },
  { name: "Audi q5", img:"/cars/Audi-q5.jpg", brand: "Audi", model: "Suvs", fuelType: "Diesel", pricePerDay: "₹6500" },

  { name: "Bmw 3", img:"/cars/bmw-3.jpg",brand: "BMW", model: "Sedans", fuelType: "Petrol", pricePerDay: "₹8000" },
  { name: "Bmw 7", img:"/cars/bmw-7.jpg",brand: "BMW", model: "Sedans", fuelType: "Petrol", pricePerDay: "₹7800" },
  { name: "Bmw x3", img:"/cars/bmw-x3.jpg", brand: "BMW", model: "Suvs", fuelType: "Diesel", pricePerDay: "₹9000" },
  { name: "Bmw m2", img:"/cars/bmw-m2.jpg", brand: "BMW", model: "Sports", fuelType: "Petrol", pricePerDay: "₹ 15000" },

  { name: "Lamborghini Huracán", img: "/cars/lamborgini-hur.webp",brand: "Lamborghini", model: "Sports", fuelType: "Petrol", pricePerDay: "₹ 15000" },
  { name: "Lamborghini Revuelto", img:"/cars/lamborgini-rev.jpg", brand: "Lamborghini", model: "Sports", fuelType: "Petrol", pricePerDay: "₹ 18000" },
  { name: "Lamborghini Urus",     img:"/cars/lamborgini-urus.jpg", brand: "Lamborghini", model: "Sports", fuelType: "Petrol", pricePerDay: "₹ 19000" },
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