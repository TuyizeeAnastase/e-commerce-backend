import express from "express"
import shopsController from "../controllers/shop.controller"

const router=express.Router();

router.route("/").get(shopsController.getShops)


export default router;