import Joi from "joi";

export const registerSchema = Joi.object({
  gmail: Joi.string()
    .trim()
    .lowercase()
    .email({ tlds: { allow: false } })
    .required(),
  name: Joi.string().trim().min(1).max(64).required(),
  password: Joi.string().trim().min(1).max(64).required(),
  birth_date: Joi.date(),
  role: Joi.string().trim().min(1).max(64).required(),
});

export const loginSchema = Joi.object().keys({
  gmail: Joi.string()
    .trim()
    .lowercase()
    .email({ tlds: { allow: false } }),
  password: Joi.string().trim().min(1).max(64).required(),
});
