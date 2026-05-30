import Joi from 'joi';

export const createChapterSchema = Joi.object({
  name: Joi.string().required().min(3).messages({
    'string.empty': 'Chapter name cannot be empty',
    'any.required': 'Chapter name is required',
    'string.min': 'Chapter name must be at least 3 characters long'
  })
});