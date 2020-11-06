const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');
var cors = require("cors");
const app = express();
const { Router } = require('express');
const router = require('./routes/index');

//settings
app.set("port", process.env.PORT || 3001);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.use('/', router);

module.exports = app;

//routes