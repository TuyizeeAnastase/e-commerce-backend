import joi from "joi";

export const userValidation = async (req, res, next) => {
  const userSchema = joi
    .object({
      full_name:joi.string().required().messages({
        "any.required":"Name is required"
      }),
      phone_number: joi.string().min(10).required().messages({
        "any.required": "Phone Number required",
      }),
      password: joi.string().min(8).required().messages({
        "any.required": "Password required",
        "string.min": "Password require 8 characters",
      }),
      confirm_password: joi.string().min(8).required().messages({
        "any.required": "Password required",
        "string.min": "Password require 8 characters",
      })
    })
    .options({ allowUnknown: true });
  const value = await userSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message.replace(/["'`]+/g, ""),
    });
  } else {
    next();
  }
};


export const loginValidation = async (req, res, next) => {
  const userSchema = joi
    .object({
      phone_number: joi.string().min(10).required().messages({
        "any.required": "Phone Number required",
      }),
      password: joi.string().min(8).required().messages({
        "any.required": "Password required",
        "string.min": "Password require 8 characters",
      })
    })
    .options({ allowUnknown: true });
  const value = await userSchema.validate(req.body);
  if (value.error) {
    res.status(400).json({
      message: value.error.details[0].message.replace(/["'`]+/g, ""),
    });
  } else {
    next();
  }
};
