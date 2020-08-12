import { userRouter } from "./users";
import { booksRouter } from "./events";

export default (app) => {
  app.use(userRouter);
  app.use(booksRouter);
};
