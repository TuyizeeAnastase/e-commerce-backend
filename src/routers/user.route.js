import express from "express";
import userController from "../controllers/user.controller.js";
import {
  userValidation,
  loginValidation,
} from "../validations/user.validations.js";
import {
  checkUserExistByPhone,
  checkUserExist,
} from "../middleware/user.middleware.js";

const router = express();

router.post(
  "/register",
  userValidation,
  checkUserExistByPhone,
  userController.registerUser
);
router.post("/login", loginValidation, checkUserExist, userController.login);
router.get("/", userController.getAllUSers);

export default router;
