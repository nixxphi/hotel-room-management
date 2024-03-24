import "express-async-errors";
import express from "express";
import errorHandler from "../middlewares/errors.middleware.js";

const app = express();

app.use(routes);

// Use the error handling middleware after all other middleware and routes
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
