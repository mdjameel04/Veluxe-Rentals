import express from "express";
import { createBooking, getBookingsByUser } from "../controllers/bookingControllers.js";

const router = express.Router();

router.post("/", createBooking);
router.get("/:userId", getBookingsByUser);

export default router;