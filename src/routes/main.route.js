import roomRouter from "./room.route.js";
import roomTypeRouter from "./roomType.route.js";
import userRouter from "./user.route.js";

const apiVersion = '/api/v1'
export default (app) => {
  app.use(`${apiVersion}/rooms`, roomRouter);
  app.use(`${apiVersion}/rooms-types`, roomTypeRouter);
  app.use(`${apiVersion}/user`, userRouter);
};