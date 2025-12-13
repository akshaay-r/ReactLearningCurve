const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({ users: ["Hulk", "Thor", "Ironman"] });
});

app.listen(5500, () => {
  console.log("Server started on 5500");
});
