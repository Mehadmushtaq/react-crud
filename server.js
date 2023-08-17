const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const req = require("express/lib/request");
const con = require("./db/connection");

const app = express(); //initalizing express app

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.status(200).end("hello from express server");
});

const perFormCrud = require("./routes/curdroutes");

app.use("/api", perFormCrud);

con();

app.listen(port, () => console.log(`server is running at port ${port}`));
