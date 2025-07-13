// import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
// import expressSession from "express-session";
// import passport from "passport";
// import { envVars } from "./app/config/env";
// import "./app/config/passport";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
import { router } from "./app/routes";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "Welcome to Gym Management System Backend",
  });
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;

// gym-management-system
// EfDxsggu0wlagB2l
