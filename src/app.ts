import express, { NextFunction, Request, Response } from "express";
import initRouter from "./routes/products.route";
import { errorResponse } from "./utils/response.util";
import { HttpError } from "./types";
const app = express();
app.use(express.json());
app.use(initRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  errorResponse(res, "Not Found", 404);
});

app.use((error: HttpError, req: Request, res: Response, next: NextFunction) => {
  if(error.status !== 500) {
    errorResponse(res, error.message, error.status);
  };
  errorResponse(res);
});

app.listen(3000, () => {
  console.log("Đang chạy với cổng 3000");
});
