const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "https://react-frontend.vercel.app",
  }),
);
app.use(express.json());

app.get("/api/message", (req, res) => {
  res.json({
    message: "Backend connected successfully 🚀",
  });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Vijay" },
    { id: 2, name: "React" },
    { id: 3, name: "Node" },
  ]);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
