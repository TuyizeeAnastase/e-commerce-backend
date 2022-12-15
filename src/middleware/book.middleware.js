import { Service } from "../database/models";

export const checkServiceExist = async (req, res, next) => {
  const { category_id } = req.body;
  const service = await Service.findOne({
    where: {
      id: category_id,
    },
  });
  if (!service) {
    return res.status(404).json({
      message: `Service  doesn't exist, contact admin for support`,
    });
  }
  req.service = service;
  next();
};
