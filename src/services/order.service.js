import { Order, User } from "../database/models";

export const getAllOrders = async () => {
  return await Order.findAll({
    include: [
      {
        model: User,
        as: "user",
      },
    ],
  });
};

export const addOrder = async (order) => {
  return await Order.create(order);
};

export const getOrderByUser = async (id) => {
  const order = await Order.findOne({
    where: {
      user_id: id,
    },
  });
  return order;
};
