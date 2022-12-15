import { createUser, getUSers } from "../services/user.services.js";
import bcrypt from "bcryptjs";
import { getRole } from "../services/role.services.js";
import { getToken } from "../util/token.js";

export class userControllers {
  async registerUser(req, res) {
    try {
      if (req.body.password != req.body.confirm_password) {
        return res.status(500).json({
          message: "Confirm password is different with password",
        });
      }
      const password = await bcrypt.hash(req.body.password, 12);
      const role = await getRole();
      const newUser = {
        full_name: req.body.full_name,
        email: req.body.email,
        password: password,
        roleId: role.id,
        phone_number: req.body.phone_number,
      };
      const user = await createUser(newUser);
      return res.status(201).json({
        message: `SignUp successfully`,
        user: user,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while registering user",
        error: err.message,
      });
    }
  }

  async login(req, res) {
    try {
      const { password } = req.body;
      const user = req.user;
      if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({
          message: "Password does not match",
        });
      }
      const token = getToken({ id: user.id, role: user.role.title });
      return res.status(200).json({
        token: token,
        user: {
          user_id: user.id,
          full_name: user.full_name,
          email: user.email,
          phone_number: user.phone_number,
          role: user.role.title,
        },
      });
    } catch (error) {
      res.status(500).json({
        message: "Error occured while logged in, try Again",
        error: error.message,
      });
    }
  }

  async getAllUSers(req, res) {
    try {
      const users = await getUSers();
      return res.status(201).json({
        users,
      });
    } catch (err) {
      return res.status(500).json({
        message: "Error while retrieving users",
        error: err.message,
      });
    }
  }
}

const userController = new userControllers();
export default userController;
