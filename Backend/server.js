import express  from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import connectedDb from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import carRoutes from "./routes/carRoutes.js";
import bookingRoutes from './routes/bookingRoutes.js'
dotenv.config();

const app = express()

//middleware
 app.use(express.json())
 app.use(cors())

// Router
app.use('/api/users',userRoutes )
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);
app.use("/api/bookings", bookingRoutes);

app.use("/", (req, res) => {
  res.send("Server running successfully 🚗");
});

 //connection
 connectedDb()

const PORT =process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server is running successfully on port ${PORT}`))