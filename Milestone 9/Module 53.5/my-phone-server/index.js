const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("My phone information coming sooooooooooon");
});

app.listen(port, () => {
  console.log(`port is : ${port}`);
});
