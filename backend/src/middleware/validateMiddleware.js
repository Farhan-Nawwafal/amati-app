const validateMiddleware = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error)
      return res.status(400).json({
        success: false,
        message: "Validation failed!",
        error: error.details[0].message,
      });
    next();
  };
};

export default validateMiddleware;
