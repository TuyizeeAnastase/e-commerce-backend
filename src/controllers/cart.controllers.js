import {
  getAllCart,
  addCart,
  getCartByUser,
  updateCart,
} from "../services/cart.services";
import {
  addCartItem,
  getItemByCartId,
  getCartByProductId,
  updateItem,
} from "../services/cart_item.services";

export class cartControllers {
  async getCarts(req, res) {
    try {
      const carts = await getAllCart();
      return res.status(200).json({
        carts,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error while getting carts",
        error: error.message,
      });
    }
  }
  async createCart(req, res) {
    const loggedUSer = req.loggedUSer;
    const product = req.products;
    const cart = req.cart;
    let newCart;
    let itemAdded;
    const data = {
      user_id: loggedUSer.id,
    };
    newCart = await addCart(data);
    const item = {
      cart_id: [newCart.id],
      quantity: req.body.quantity,
      user_id: [loggedUSer.id],
      product_id: JSON.parse(req.body.products_id),
      total: parseInt(product.price) * parseInt(req.body.quantity),
    };
    if (req.cartExist == "false") {
      itemAdded = await addCartItem(item);
    } else {
      const checkItem = await getCartByProductId(
        loggedUSer.id,
        JSON.parse(req.body.products_id)
      );
      if (!checkItem) {
        itemAdded = await addCartItem({
          cart_id: [cart.id],
          quantity: req.body.quantity,
          user_id: [loggedUSer.id],
          product_id: JSON.parse(req.body.products_id),
          total: parseInt(product.price) * parseInt(req.body.quantity),
        });
      } else {
        newCart = await updateItem(
          {
            quantity:
              parseInt(req.body.quantity) + parseInt(checkItem.quantity),
            total:
              parseInt(product.price) *
              (parseInt(req.body.quantity) + parseInt(checkItem.quantity)),
          },
          checkItem.id
        );
      }
    }
    return res.status(201).json({
      message: "New product add to cart",
      newCart,
      itemAdded,
    });
  }
  catch(err) {
    return res.status(500).json({
      message: "Unable to add to cart",
      error: err.message,
    });
  }

  async getCartByUser(req, res) {
    try {
      const id = req.loggedUSer.id;
      const carts = await getCartByUser(id);
      if (!carts) {
        return res.status(404).json({
          message: "No Cart Found",
        });
      }
      const items = await getItemByCartId(carts.id);
      return res.status(201).json({
        carts,
        items,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while getting carts",
        err: err.message,
      });
    }
  }
}

const cartController = new cartControllers();
export default cartController;
