const app = require("express");
require("dotenv").config();
const server = app();

server.get("/", (req, res) => {
  res.status(200).json({
    name: "Express API",
    version: "1.0.0",
    Page: "Home",
    title: "Home Page",
  });
});

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost"

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
