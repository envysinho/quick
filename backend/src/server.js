const express = require("express");
const cors = require("cors");

const votesRoutes = require("./routes/votes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "Backend funcionando"
  });
});

// API
app.use("/api/votes", votesRoutes);

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});