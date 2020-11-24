const express = require("express");
const router = express();

const Cohort = require("../models/cohort");
const User = require("../models/user");

router.get("/all", (req, res, next) => {
  Cohort.find(function (err, cohorts) {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).json(cohorts);
  });
});

router.put("/:name", (req, res) => {
  const { name } = req.params;
  const body = req.body;

  Cohort.update({ name }, body)
    .then(() => {
      res.status(200).json({ msg: "Ok" });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/create", (req, res) => {
  const { name, startDate } = req.body;

  Cohort.create({ name: name, startDate: startDate }, function (err, cohort) {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).json({ msg: "Ok", cohort });
  });
});

router.get("/students", (req, res)   => {
  const {cohort} = req.query;

  User.find({ role: "student"})
    .populate("cohorte")
    .populate("group")
    .populate("module")
    .then((students) => {
      const studentsCohort = students.filter(student => student.cohorte)
      const response = studentsCohort.filter(student => student.cohorte.name === cohort)  
      res.status(200).send(response);
    })
    .catch((err) => {
      console.log(err);
    });
})

module.exports = router;
