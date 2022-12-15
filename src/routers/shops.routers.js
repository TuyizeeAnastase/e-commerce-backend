import express from "express"
import shopsController from "../controllers/shop.controller.js"

const router=express.Router();

router.route("/").get(shopsController.getShops)


export default router;