import { Booking, User, Service } from "../database/models";

export const getAllBookings = async () => {
  return await Booking.findAll({
    include: [
      {
        model: User,
        as: "booked_user",
      },
      {
        model: Service,
        as: "booking_category",
      },
    ],
  });
};

export const addBooking = async (booking) => {
  return await Booking.create(booking);
};

export const updateBooking = async (update, id) => {
  const booking = await Booking.update(update, {
    where: {
      id,
    },
  });
  return booking;
};
