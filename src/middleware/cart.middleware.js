import { Product, Cart } from "../database/models";

export const checkProductsExist = async (req, res, next) => {
  const products_id = JSON.parse(req.body.products_id);
  const { quantity } = req.body;
  const products = await Product.findOne({
    where: {
      id: products_id,
    },
  });
  if (!products) {
    return res.status(404).json({
      message: `Product  doesn't exist, contact admin for support`,
    });
  } else {
    console.log(quantity,products.quantity)
    if (quantity > products.quantity) {
      return res.status(404).json({
        message: `Only ${products.quantity} available on stock`,
      });
    }
    req.products = products;
    next();
  }
};

export const checCartExist = async (req, res, next) => {
  let cartExist;
  const user_id = req.loggedUSer.id;
  const cart = await Cart.findOne({
    where: {
      user_id: user_id,
    },
  });
  if (cart) {
    cartExist = "true";
  } else {
    cartExist = "false";
  }
  req.cartExist = cartExist;
  req.cart = cart;
  next();
};
