import { Cart, Product, User, CartItem } from "../database/models";

export const getAllCart = async () => {
  return await Cart.findAll({
    include: [
      {
        model: User,
        as: "user",
      },
    ],
  });
};

export const addCart = async (cart) => {
  return await Cart.create(cart);
};

export const updateCart = async (update, id) => {
  try{
    const cart = await Cart.update(update, {
    where: {
      id,
    },
  });
  return cart;
  }catch(err){
    console.log(err)
  }
};

export const deleteCart = async (id) => {
  const cart = await Cart.destroy({
    where: {
      id,
    },
  });
  return cart;
};

export const getCartByUser = async (id) => {
  const cart = await Cart.findOne({
    where: {
      user_id: id,
    },
  });
  return cart;
};

