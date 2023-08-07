// app.js
const express = require("express");
const db = require("./connection");
const studentRoutes = require("./routers/studentRoutes");
const cors = require("cors");

const app = express();
app.use(express.json());

app.use(cors());

app.use("/api", studentRoutes);

const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
