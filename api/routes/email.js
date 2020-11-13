const express = require("express");
const router = express();
const Email = require("../models/email");
// const { mailgunApiKey, mailgunDomain } = process.env;
const keys = require("./configMailgun");
const code = keys();
const MAIL_GUN_KEY = code.MAIL_GUN_KEY;
const MAIL_GUN_DOMAIN = code.MAIL_GUN_DOMAIN;

var mailgun = require("mailgun-js")({
  apiKey: MAIL_GUN_KEY,
  domain: MAIL_GUN_DOMAIN,
});
//--------------Post------------------------
router.post("/create", (req, res) => {
  const newEmail = req.body;
  console.log(newEmail);
  const data = {
    from: "HenryApp <lescanovsl@gmail.com>",
    to: newEmail.email,
    subject: "Bienvenido a Henry",
    text: "Ingresa al campus virtual",
    template: "invitacion.test",
  };

  if (!newEmail) {
    return res.status(400).json({
      message: "Falta email",
    });
  } else {
    Email.create(newEmail, function (err, newEmail) {
      if (err) {
        console.log(err);
        return;
      }
      mailgun.messages().send(data, function (error, body) {
        console.log(body);
      });
      res.status(200).json(newEmail);
    });
  }
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
  const { email } = req.params;

  Email.deleteOne({ email: email }, function (err, deleted) {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).json({ msg: "Ok" });
  });
});

module.exports = router;
