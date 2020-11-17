const express = require("express");
const router = express();
const userRoutes = require("./user");
const cohortRoutes = require("./cohort");
const adminRoutes = require("./admin");
const instructorRoutes = require("./instructor");
const PpRoutes = require("./pair-programming");
const groupRoutes = require("./group");
const authRoutes = require("./auth");
const emailRoutes = require("./email");
<<<<<<< HEAD
const calendarRoutes = require("./calendar")
=======
const calendarRoutes = require ("./calendar")


>>>>>>> 7aaecc010aa5a8c96db4f8ae98ffd0a49704b68e
const moduleRoutes = require("./module");
const feedbackRoutes = require("./feedback")



router.use("/admin", adminRoutes);
router.use("/cohort", cohortRoutes);
router.use("/student", userRoutes);
router.use("/feedback", feedbackRoutes);
router.use("/instructor", instructorRoutes);
router.use("/PP", PpRoutes);
router.use("/group", groupRoutes);
router.use("/auth", authRoutes);
router.use("/email", emailRoutes);
router.use("/calendar", calendarRoutes);


router.use("/module", moduleRoutes);



module.exports = router;
