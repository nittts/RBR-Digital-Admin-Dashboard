import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "dotenv";

import { errorHandling } from "./middlewares/asyncErrors.middleware";
import rateLimiterMiddleware from "./middlewares/raterLimiter.middleware";

import routes from "./routes";
import connectMongo from "./database/mongo";

config();
const app = express();

// Parse body from requests
app.use(express.json());

// Rate limit requests
app.use(rateLimiterMiddleware);

// Cors protection and headers
app.use(cors());

// Protect the app!
app.use(helmet());

// Initiate Database Connection
connectMongo();

// Define routes
routes(app);

// Async error Handling
app.use(errorHandling);

app.get("/", (req: Request, res: Response) => {
  res.send("Server Running!");
});

export default app;
