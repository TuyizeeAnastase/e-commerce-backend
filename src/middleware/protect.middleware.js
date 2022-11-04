import { decoding } from "../util/token";
import { getUserById } from "../services/user.services";

export const protect = async (req, res, next) => {
  let token;
  if (req.headers.authorization) {
    token = req.headers.authorization.split(" ")[1];
  }
  if (!token) {
    return res.status(401).json({
      message: "Please login",
    });
  }
  try {
    const decoded = await decoding(token);
    const user = await getUserById(decoded.id);
    req.user = user;
    req.loggedUSer = user;
    next();
  } catch (err) {
    return res.status(500).json({
      message: "Please login to access",
    });
  }
};

export const restrictTo = (...roles) => {
  return (req, res, next) => {
    const role = req.user.role.title;
    if (!roles.includes(role)) {
      return res.status(403).json({
        message: "You are not authorized to perform this action",
      });
    }
    next();
  };
};
