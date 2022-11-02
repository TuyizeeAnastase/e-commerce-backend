import express from "express";
import userController from "../controllers/user.controller";
import { userValidation } from "../validations/user.validations";
import {
  checkUserExistByPhone,
  checkUserExist,
} from "../middleware/user.middleware";

const router = express();

router.post(
  "/register",
  userValidation,
  checkUserExistByPhone,
  userController.registerUser
);
router.post("/login", userValidation, checkUserExist, userController.login);

export default router;
