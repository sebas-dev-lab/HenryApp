const express = require("express");
const router = express();
const studentRoutes = require("./student");
const adminRoutes = require("./admin");

router.use("/student", studentRoutes);
router.use("/admin", adminRoutes);

module.exports = router;
