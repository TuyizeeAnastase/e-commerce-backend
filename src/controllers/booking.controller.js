import {
  addBooking,
  getAllBookings,
  updateBooking,
} from "../services/booking.service";
import { sendMessage } from "../util/sms";

export class bookingControllers {
  async getBookings(req, res) {
    try {
      const bookings = await getAllBookings();
      return res.status(200).json({
        bookings,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error while retriveing booking",
        error: error.message,
      });
    }
  }
  async createBooking(req, res) {
    const loggedUSer = req.loggedUSer;
    const service = req.service;
    const phone_number = "+250787499115";
    const data = {
      user_id: loggedUSer.id,
      phone: loggedUSer.phone_number,
      address: req.body.address,
      issue: req.body.issue,
      category_id: req.body.category_id,
      is_fixed: "No",
    };
    await sendMessage(
      `New  service ${service.name} booked by  ${loggedUSer.full_name}, check dashbord for more info`,
      phone_number
    );
    const newBooking = await addBooking(data);
    return res.status(201).json({
      message: "Maintaince Booked",
      newBooking,
    });
  }
  catch(err) {
    return res.status(500).json({
      message: "Unable to book service",
      error: err.message,
    });
  }
  async updateBooking(req, res) {
    try {
      // const booking = req.booking;
      const { id } = req.params;
      const data = req.body;
      await updateBooking(data, id);
      return res.status(200).json({
        booking: { id: id, ...req.body },
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while updating booking",
        err: err.message,
      });
    }
  }
}

const bookingController = new bookingControllers();
export default bookingController;
