import express from "express";
import authRoutes from "./routes/auth.ts";
import habitRoutes from "./routes/habits.ts";
import userRoutes from "./routes/users.ts";

// Create the express application
// This would be the server, with an optional name, but conventionally named "app"
const app = express();

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
