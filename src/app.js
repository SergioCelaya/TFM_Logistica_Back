const express = require("express");
const dayjs = require("dayjs");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// RUTAS
app.use("/api", require("./routes/api"));

module.exports = app;
