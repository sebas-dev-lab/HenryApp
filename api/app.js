const express = require("express");
const morgan = require("morgan");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/index");
const passport = require("passport");

const app = express();
//settings

app.use(cors({
  credentials: true,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  origin: "http://localhost:3000"
}));

app.set("port", process.env.PORT || 3001);

//middlewares
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.json());
app.use(cookieParser('secret'));
app.get("/", function (req, res) {
  console.log("Cookies: ", req.cookies);
  console.log("Signed Cookies: ", req.signedCookies);
});
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
  
app.use(passport.initialize());
app.use(passport.session());
require("./config/passport");
require("./config/passportGoogle");
require("./config/passportGitHub");
  
app.use("/", router);

module.exports = app;
