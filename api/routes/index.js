const express = require("express");
const router = express();
const studentRoutes = require("./student");

router.use("/student", studentRoutes);

module.exports = router;
