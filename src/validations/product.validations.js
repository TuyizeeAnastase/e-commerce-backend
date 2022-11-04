import joi from "joi";

export const productValidation = async (req, res, next) => {
  const productSchema = joi
    .object({
      product_name: joi.string().required().messages({
        "any.required": "Please add product name",
      }),
      quantity: joi.string().required().messages({}),
      price: joi.string().required().messages({}),
      description: joi.string().required().messages({}),
      color: joi.string().required().messages({}),
      category_id: joi.required().messages({
        "any.required": "Please add product category",
      }),
    })
    .options({ allowUnknown: true });
  const value = await productSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message.replace(/["'`]+/g, ""),
    });
  } else {
    next();
  }
};
