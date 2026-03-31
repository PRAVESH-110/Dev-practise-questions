// create a error handling middleware (send JSON error)

const express = require("express");
const errorHandler = require("./errorMiddleware");

const app = express();
app.use(express.json());

// routes
app.use("/api/users", userRoutes);

//has 4 parameters not 3
const errorhandling= (err,req,res,next)=>{
    console.error(err.stack);

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    error: message
  });
};

//alwaysuse the error middleware at end since top-> down parsing
//errors occuring will flow at the end and encounter the middleware
app.use(errorhandling);
module.exports={app};

