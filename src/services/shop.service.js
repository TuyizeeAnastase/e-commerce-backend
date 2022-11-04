import { Shop } from "../database/models";

export const getAllShops = async () => {
  return await Shop.findAll({});
};
