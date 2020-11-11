const express = require("express");
const router = express();
const Email = require("../models/email");
const { mailgunApiKey, mailgunDomain } = process.env;

const DOMAIN = "sandbox81755d8aa1034deb89acbfd2d256012f.mailgun.org";
const mailgun = require("mailgun-js");
const mg = mailgun({
  apiKey: "3a77cbb7fe0d44772e749a5217a6d19e-ba042922-7a57af9b",
  domain: DOMAIN,
});
//--------------Post------------------------
router.post("/create", (req, res) => {
  const newEmail = req.body;
  const data = {
    from: "HenryApp <lismarsz_11@hotmail.com>",
    to: "sanchezlismairy@gmail.com",
    subject: "Bienvenido a Henry",
    text: "Ingresa al campus virtual",
    template: "invitacion.test",
  };

  Email.create(newEmail, function (err, newEmail) {
    if (err) {
      console.log(err);
      return;
    }
    mg.messages().send(data, function (error, body) {
      console.log(body);
    });
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
