const loggerMiddleware = (req, res, next) => {
  const start = Date.now();

  // Run when response is finished
  res.on("finish", () => {
    const duration = Date.now() - start;

    // Bonus: log only failed requests
    if (res.statusCode >= 400) {
      console.log(
        `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`
      );
    }
  });

  next();
};

module.exports = loggerMiddleware;