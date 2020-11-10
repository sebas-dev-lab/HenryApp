const express = require("express");
const router = express();
const Email = require("../models/email");

//--------------Post------------------------
router.post("/create", (req, res) => {
  const newEmail = req.body;

  Email.create(newEmail, function (err, newEmail) {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).json({ msg: "Ok", newEmail });
  });
});

//---------------Get----------------

router.get("/all", (req, res, next) => {
  Email.find(function (err, emails) {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).json(emails);
  });
});

//---------------Put----------------
router.put("/:email", (req, res) => {
  const email = req.body;

  Email.update(email)
    .then(() => {
      res.status(200).json({ msg: "Ok" });
    })
    .catch((err) => {
      console.log(err);
    });
});

//---------------Delete-----------------
router.delete("/:email", (req, res) => {
  const { email } = req.body;

  Email.deleteOne({ email: email }, function (err, deleted) {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).json({ msg: "Ok" });
  });
});

module.exports = router;
