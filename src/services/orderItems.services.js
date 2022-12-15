import { OrderItem, Product } from "../database/models";
import { Op } from "sequelize";

export const addOrderItem = async (item) => {
  return await OrderItem.create(item);
};

export const getItemByOrderId = async (id) => {
  const items = await OrderItem.findAll({
    where: {
      order_id: { [Op.contains]: [id] },
    },
    include: [
      {
        model: Product,
        as: "orderProducts",
      },
    ],
  });
  return items;
};

export const getOrderItemByProduct = async (user_id, product_id) => {
  const item = await OrderItem.findOne({
    where: {
      [Op.and]: [{ product_id }, { user_id: { [Op.contains]: [user_id] } }],
    },
  });
  return item;
};
