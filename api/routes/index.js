const express = require("express");
const router = express();
const studentRoutes = require("./student");
const cohortRoutes = require("./cohort");
const adminRoutes = require("./admin");

router.use("/admin", adminRoutes);
router.use("/cohort", cohortRoutes);
router.use("/student", studentRoutes);

module.exports = router;
