import express from "express";
import { addCar, getCars, getCarsById } from "../controllers/carControllers.js";

const router = express.Router()

router.post('/', addCar);
router.get('/', getCars)
router.get('/:id', getCarsById)

export default router