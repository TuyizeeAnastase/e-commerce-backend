import { Product, Shop } from "../database/models.js";
import { Op } from "sequelize";

export const getAllProducts = async () => {
  return await Product.findAll({
    include: [
      {
        model: Shop,
        as: "category",
      },
    ],
  });
};

export const searchProducts = async (q) => {
  const products = await Product.findAndCountAll({
    where: {
      product_name: {
        [Op.like]: `%${q}%`,
      },
    },
    include: [
      {
        model: Shop,
        as: "category",
      },
    ],
  });
  return products;
};

export const addProduct = async (product) => {
  return await Product.create(product);
};

export const updateProduct = async (update, id) => {
  const product = await Product.update(update, {
    where: {
      id,
    },
  });
  return product;
};

export const deleteProduct = async (id) => {
  const product = await Product.destroy({
    where: {
      id,
    },
  });
  return product;
};

export const getProductByCategory = async (id) => {
  const products = await Product.findAll({
    where: {
      category_id: id,
    },
  });
  return products;
};

export const getServices = async () => {
  const services = await Product.findAll({
    where: {
      "$category.name$": `%${"Maintainance"}%`,
    },
  });
  return services;
};

export const getProductsByArrays = async (product_id) => {
  const products = await Product.findAll({
    where: {
      id: product_id,
    },
  });
  return products;
};
