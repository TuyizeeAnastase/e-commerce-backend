import { Service } from "../database/models";

export const getServices = async () => {
  return await Service.findAll({});
};
