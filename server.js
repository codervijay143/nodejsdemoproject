const express = require("express");
const cors = require("cors");

const app = express();

// ✅ CORS FIX (important)
app.use(cors({
  origin: "*",
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend working");
});

app.get("/api/message", (req, res) => {
  res.json({ message: "API working from backend" });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Vijay" },
    { id: 2, name: "Kumar" }
  ]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});