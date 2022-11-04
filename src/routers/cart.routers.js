import express from "express";
import cartController from "../controllers/cart.controllers";
import { protect, restrictTo } from "../middleware/protect.middleware";
import { cartValidation } from "../validations/cart.validations";
import {
  checkProductsExist,
  checCartExist,
} from "../middleware/cart.middleware";

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
