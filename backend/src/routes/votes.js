const express = require("express");
const db = require("../db");
const { getCurrentWeek } = require("../utils/week");

const router = express.Router();

router.get("/", (req, res) => {
  const rows = db.prepare("SELECT * FROM votes").all();
  res.json(rows);
});

router.post("/", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ error: "name is required" });
  }

  const week = getCurrentWeek();

  const stmt = db.prepare(
    "INSERT INTO votes (name, week) VALUES (?, ?)"
  );

  const result = stmt.run(name, week);

  res.json({
    id: result.lastInsertRowid,
    name,
    week
  });
});

router.get("/results/:week", (req, res) => {
  const { week } = req.params;

  const rows = db.prepare(`
    SELECT name, COUNT(*) as votes
    FROM votes
    WHERE week = ?
    GROUP BY name
    ORDER BY votes DESC
  `).all(week);

  res.json(rows);
});

module.exports = router;