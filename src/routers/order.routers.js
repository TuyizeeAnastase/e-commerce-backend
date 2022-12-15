import express from "express";
import orderController from "../controllers/order.controller";
import { protect, restrictTo } from "../middleware/protect.middleware";

const router = express.Router();

router.route("/").get(protect, orderController.getOrders);

export default router;
