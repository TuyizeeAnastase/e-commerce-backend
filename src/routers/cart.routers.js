import express from "express";
import cartController from "../controllers/cart.controllers.js";
import { protect, restrictTo } from "../middleware/protect.middleware.js";
import { cartValidation } from "../validations/cart.validations.js";
import {
  checkProductsExist,
  checCartExist,
} from "../middleware/cart.middleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, cartController.getCartByUser)
  .post(
    protect,
    cartValidation,
    checkProductsExist,
    checCartExist,
    cartController.createCart
  );

// router.route("/:id").get(cartController.getCartByUser);

export default router;
