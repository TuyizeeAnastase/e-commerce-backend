import { Product, Shop } from "../database/models";
import cloadinary from "cloudinary";

export const checkProductExist = async (req, res, next) => {
  const { product_name } = req.body;
  const product = await Product.findOne({
    where: {
      product_name: product_name.toLowerCase(),
    },
  });
  if (product) {
    res.status(404).json({
      message: "Product already exist",
    });
  }
  next();
};

export const checkProductExistById = async (req, res, next) => {
  const { id } = req.params;
  const product = await Product.findOne({
    where: {
      id,
    },
    include: [
      {
        model: Shop,
        as: "category",
      },
    ],
  });
  if (!product) {
    res.status(404).json({
      message: "Product doesn't exist",
    });
  }
  req.product = product;
  next();
};

export const uploadImage = async (req, res, next) => {
  if (!req.files) {
    return res.status(401).json({
      message: "Please upload product image",
    });
  }
  try {
    {
      const file = req.files.images;
      cloadinary.uploader.upload(file.tempFilePath, async (results, err) => {
        if (err) {
          res.status(500).json({
            message: "Unable to upload image",
            error: err,
          });
        }
        req.results = results;
        next();
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Unable to upload image",
      error: error.message,
    });
  }
};

export const checkImageFormat = (...extensions) => {
  return (req, res, next) => {
    if (req.results) {
      const results = req.results;
      if (!extensions.includes(results.format.toLowerCase())) {
        return res.status(405).json({
          message: `Only ${extensions} format is allowed`,
        });
      } else {
        req.results = results;
        next();
      }
    } else {
      next();
    }
  };
};
export const checkShopExist = async (req, res, next) => {
  const { category_id } = req.body;
  const category = await Shop.findOne({
    where: {
      id: category_id,
    },
  });
  if (!category) {
    return res.status(404).json({
      message: "Shop category doesn't exist",
    });
  }
  next();
};
