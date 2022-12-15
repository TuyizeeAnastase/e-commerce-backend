import { CartItem, Product } from "../database/models.js";
import { Op } from "sequelize";

export const addCartItem = async (item) => {
  return await CartItem.create(item);
};

export const getItemByCartId = async (id) => {
  const items = await CartItem.findAll({
    where: {
      cart_id: { [Op.contains]: [id] },
    },
    include: [
      {
        model: Product,
        as: "products",
      },
    ],
  });
  return items;
};

export const getCartByProductId = async (user_id, product_id) => {
  const item = await CartItem.findOne({
    where: {
      [Op.and]: [{ product_id }, { user_id: { [Op.contains]: [user_id] } }],
    },
  });
  return item;
};

export const updateItem = async (update, id) => {
  const item = await CartItem.update(update, {
    where: {
      id,
    },
  });
  return item;
};
