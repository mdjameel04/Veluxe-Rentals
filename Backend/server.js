import express  from "express";
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
import bcryptjs from 'bcryptjs'
import connectedDb from "./config/db.js";

dotenv.config();
const app = express()

//middleware
 app.use(express.json())
 app.use(cors())


 //
 connectedDb()

const PORT =process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server is running sucessfully on port ${PORT}`))