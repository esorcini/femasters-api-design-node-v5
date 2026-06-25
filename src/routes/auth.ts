import { Router } from "express";
// In the diagram: request --> middleware --> handler --> response
//This module would be a "handler" for the API requests coming to the server

const router = Router();

router.post("/register", (req, res) => {
  res.status(201).json({ message: "User registered successfully" });
});

router.post("/login", (req, res) => {
  res.status(200).json({ message: "User logged in" });
});

export default router;
