import express from "express";
import productController from "../controllers/product.controller.js";
import { productValidation } from "../validations/product.validations.js";
import {
  checkProductExist,
  checkImageFormat,
  checkShopExist,
  uploadImage,
  checkProductExistById,
} from "../middleware/product.middleware.js";

const router = express.Router();

router
  .route("/")
  .get(productController.getProducts)
  .post(
    productValidation,
    checkProductExist,
    checkShopExist,
    uploadImage,
    checkImageFormat("jpg", "png", "jpeg"),
    productController.createProduct
  );

router
  .route("/:id")
  .delete(checkProductExistById, productController.deleteProduct)
  .get(checkProductExistById, productController.getProduct)
  .patch(checkProductExistById, productController.updateProduct);

router.route("/category/:id").get(productController.getCategoryProduct);
router.route("/services").get(productController.getServiceCategory);

export default router;
