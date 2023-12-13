const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let workers = [
  { id: 1, name: "İşçi1", age: 25 },
  { id: 2, name: "İşçi2", age: 30 },
  { id: 3, name: "İşçi3", age: 28 },
];

// GET request üçün endpoint
app.get("/workers", (req, res) => {
  res.json(workers);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
