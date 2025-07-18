// This is a middleware function that catches errors and passes them to the next middleware
export const asyncHandler = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      //   console.error(error);   KEPT THE LOG FOR ERRORS IN THE errorHandler middleware
      next(error);
    }
  };
};
