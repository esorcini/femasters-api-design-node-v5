import express from "express";
import authRoutes from "./routes/auth.ts";
import habitRoutes from "./routes/habits.ts";
import userRoutes from "./routes/users.ts";

import cors from "cors"; // helps declaring CORS policies
import morgan from "morgan"; // handles server logging. Ex: listing API calls in the console where node runs the server
import helmet from "helmet"; // adds request headers for improved security
import { isTest } from "../env.ts";

// Create the express application
// This would be the server, with an optional name, but conventionally named "app"
const app = express();

app.use(helmet());
app.use(cors()); // this will allow everything for everyone. This absence of this line says to the browser "block everything"
// This is put like this because there is no client for this example. On a real app YOU NEED TO SET UP YOUR CORS ORIGINS
app.use(express.json()); // this allows the server to access the body of POST requests as a json object. Directly with req.body --> returns a json object
app.use(express.urlencoded({ extended: true })); // to properly handle query strings
app.use(
  morgan("dev", {
    skip: () => isTest(),
  }),
);

// Conventional health check for the server
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timestamp: new Date().toISOString(),
    service: "Habit Tracker API",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/habits", habitRoutes);
app.use("/api/users", userRoutes);

// Default export
export { app };
export default app;
