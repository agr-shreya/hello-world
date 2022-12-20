const express = require('express');
const app = express();
const serv = require("./server.js");
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send("Hello World")
})

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

app.listen(port, () =>
  console.log("Server running on " + port));