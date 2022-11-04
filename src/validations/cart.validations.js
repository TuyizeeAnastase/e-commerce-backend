import joi from "joi";

export const cartValidation = async (req, res, next) => {
  const cartSchema = joi.object({
    products_id: joi.required().messages({
      "any.required": "Please add product",
    }),
    quantity: joi.number().integer().required().messages({}),
  });
  const value = await cartSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message.replace(/["'`]+/g),
    });
  } else {
    next();
  }
};
