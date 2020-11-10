const express = require("express");
const router = express();
const studentRoutes = require("./student");
const cohortRoutes = require("./cohort");
const adminRoutes = require("./admin");
const groupRoutes = require("./group");
const PpRoutes = require('./pair-programming')

router.use("/admin", adminRoutes);
router.use("/cohort", cohortRoutes);
router.use("/student", studentRoutes);
router.use("/group", groupRoutes);
router.use('/PP', PpRoutes);

module.exports = router;
