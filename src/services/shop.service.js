import { Shop } from "../database/models.js";

export const getAllShops = async () => {
  return await Shop.findAll({});
};
