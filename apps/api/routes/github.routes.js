import express from "express";
import { getGithubStats } from "../services/github.service.js";

const router = express.Router();

router.get("/stats", async (req, res) => {
  try {
    const data = await getGithubStats();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch GitHub stats" });
  }
});

export default router;