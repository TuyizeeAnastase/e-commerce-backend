import { Role } from "../database/models.js";

export const getRole =async () => {
  const role = Role.findOne({
    where: {
      title: "client",
    },
  });
  return role
};
