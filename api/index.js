const express = require("express");
const morgan = require("morgan");
var cors = require("cors");
const app = express();

//settings
app.set("port", process.env.PORT || 3001);

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes

//starting server
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
