import { Router } from "express";
// In the diagram: request --> middleware --> handler --> response
//This module would be a "handler" for the API requests coming to the server

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "list of habits" });
});

router.get("/:id", (req, res) => {
  res.json({ message: `habit :${req.params.id}` });
});

router.post("/", (req, res) => {
  res.status(201).json({ message: "Habit created successfully" });
});

router.delete("/:id", (req, res) => {
  res.json({ message: `deleted habit :${req.params.id}` });
});

router.post("/:id/complete", (req, res) => {
  res.json({ message: "habit completed" });
});

export default router;
