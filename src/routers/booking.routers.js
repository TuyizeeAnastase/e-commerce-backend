import express from "express";
import bookingController from "../controllers/booking.controller";
import { protect } from "../middleware/protect.middleware";

const router = express.Router();

router
  .route("/")
  .get(protect, bookingController.getBookings)
  .post(protect, bookingController.createBooking);

router.route("/:id").patch(protect, bookingController.updateBooking);

export default router;
