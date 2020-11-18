const express = require("express");
const router = express();

const User = require("../models/user");
const Cohort = require("../models/cohort");

/*==== user.js continua siendo rutas de "student" ==== */

/*===== Get all students ===== */
router.get("/all", (req, res) => {
  User.find({ role: "student" })
    .populate("cohorte")
    .populate("group")
    .then((students) => {
      res.status(200).send(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

/*===== Get students by code ===== */
router.get("/:code", (req, res) => {
  const { code } = req.params;

  User.findOne({ code: code })
    .populate("cohorte")
    .populate("PP")
    .then((user) => {
      res.status(200).json({ msg: "OK", user });
    })
    .catch((err) => {
      console.log(err);
    });
});

/*===== Create student ===== */
router.post("/create", async (req, res) => {
  const { name, lastName, dni, email, password, cohort } = req.body;

  if (!name && !lastName && !dni && !email && !password) {
    return res.status(400).send("Faltan parametros");
  } else {
    const dniUser = await User.findOne({ dni: dni });
    if (dniUser) {
      res.status(400).send("DNI existente");
    } else {
      Cohort.findOne({ name: cohort }).then(async (cohorte) => {
        const newStudent = new User({
          name,
          lastName,
          dni,
          email,
          password,
          cohorte: cohorte,
        });
        newStudent.role = "student";
        newStudent.password = await newStudent.encryptPassword(password);

        await newStudent.save();
        res.status(200).json({ msg: "OK", student: newStudent });
      });
    }
  }
});
/*===== Edit student data ===== */
router.put("/:code", (req, res) => {
  const { code } = req.params;
  const { name, lastName, dni, email, city, githubId, googleId } = req.body;
  User.findOneAndUpdate(
    { code: code },
    {
      name: name,
      lastName: lastName,
      email: email,
      dni: dni,
      city: city,
      githubId: githubId,
      googleId: googleId,


    }
  ).then((user) => {
    res.status(200).json({ msg: "Ok", user: user });
  });
});

module.exports = router;
