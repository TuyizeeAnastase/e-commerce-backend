import { User, Role } from "../database/models";
import { Op } from "sequelize";

export const checkUserExistByPhone = async (req, res, next) => {
  const { phone_number } = req.body;
  const user = await User.findOne({
    where: {
      [Op.and]: [{ phone_number }, { is_active: true }],
    },
  });
  if (user) {
    res.status(404).json({
      message: "User already exist",
    });
    return false;
  }
  next();
};

export const checkUserExist = async (req, res, next) => {
  const { phone_number } = req.body;
  const user = await User.findOne({
    where: {
      [Op.and]: [{ phone_number }, { is_active: true }],
    },
    include: [
      {
        model: Role,
        as: "role",
      },
    ],
  });
  if (!user) {
    res.status(404).json({
      message: "User doesn't exist, Please contact admin for support",
    });
    return false;
  }
  req.user = user;
  next();
};
