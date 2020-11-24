const express = require("express");
const router = express();
const ObjectId = require("mongodb").ObjectId;
const Cohort = require("../models/cohort");

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

router.get("/:id", (req, res) => {
  const { id } = req.params;

  if (id) {
    Cohort.find({ _id: id }, (err, cohort) => {
      if (err) {
        console.log(err);
        return;
      }
      res.status(200).json({ cohorte: cohort });
    });
  }
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

module.exports = router;
