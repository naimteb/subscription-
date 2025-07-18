export const errorHandler = (err, req, res, next) => {
  // Log full error internally
  console.error(err.stack || err);
  const statusCode = err.statusCode || 500;
  // Public-facing message
  const message =
    process.env.NODE_ENV === "development"
      ? err.message || "Internal Server Error"
      : "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    error: message,
  });
};
