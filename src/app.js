
import express from 'express';
import middlewareRouter from './middlewareRouter.js';

const app = express();
app.use('/api', middlewareRouter);

//
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
