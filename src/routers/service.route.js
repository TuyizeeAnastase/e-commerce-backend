import express from "express";
import serviceController from "../controllers/service.controllers";

const router = express.Router();

router.route("/").get(serviceController.getAllServices);

export default router;
