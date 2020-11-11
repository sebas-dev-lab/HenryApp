const express = require("express");
const router = express();

const User = require("../models/user");
const Cohort = require("../models/cohort");
const Group = require("../models/group");

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

/*===== Get students by dni ===== */
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
  const { name, lastName, dni, email, password } = req.body;
  if (!name && !lastName && !dni && !email && !password) {
    return res.status(400).send("Faltan parametros");
  } else {
    const dniUser = await User.findOne({ dni: dni });
    if (dniUser) {
      res.status(400).send("DNI existente");
    } else {
      const newStudent = new User({ name, lastName, dni, email, password });
      newStudent.role = "student";
      newStudent.password = await newStudent.encryptPassword(password);
      await newStudent.save();
      res.status(200).json({ msg: "OK", student: newStudent });
    }
  }
});

/*===== Delete students===== */
router.delete("/:code", (req, res) => {
  //definir atributo unico para buscar

  const { dni } = req.params;

  User.deleteOne({ dni: dni }, function (err, deleted) {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).json({ msg: "Ok" });
  });
});

/*===== Edit student data ===== FALTA!!!!*/
router.put("/:code", (req, res) => {
  const { code } = req.params;
  const { name, lastName, dni, email } = req.body;
  User.findOneAndUpdate(
    { code: code },
    {
      email: email,
    }
  ).then(() => {
    res.status(200).json({ msg: "Ok" });
  });
});

module.exports = router;
