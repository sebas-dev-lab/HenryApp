const express = require("express");
const router = express();
const studentRoutes = require("./student");
const cohortRoutes = require("./cohort");

router.use("/cohort", cohortRoutes);
router.use("/student", studentRoutes);

module.exports = router;
