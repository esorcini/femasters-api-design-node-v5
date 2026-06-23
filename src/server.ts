import express from "express";

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

// Default export
export { app };
export default app;
