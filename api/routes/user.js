const express = require("express");
const router = express();

const User = require("../models/user");
const Cohort = require("../models/cohort");
const Group = require("../models/group");

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
router.get("/:dni", (req, res) => {
  const { dni } = req.params;

  User.findOne({ dni: dni })
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
router.delete("/:dni", (req, res) => {
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

//---------------------------------------------------------------------

/*===== Update student - Cohort ===== */
router.put("/cohort/:student/:cohort", (req, res) => {
  const { student, cohort } = req.params;

  Cohort.findOne({ name: cohort }, function (err, cohort) {
    if (err) {
      console.log(err);
      return;
    }
    User.update({ name: student }, { $set: { idCohorte: cohort } }).then(() => {
      res.status(200).json({ msg: "Ok" });
    });
  });
});

// _____________________________________________________________________

/*===== Update student - group===== */
router.put("/group/:student/:group", (req, res) => {
  const { student, group } = req.params;
  //asignar grupo al estudiante
  //sumar el estudiante al array del grupo
  User.findOne({ name: student }, function (err, findStudent) {
    if (err) {
      res.status(400);
      return;
    }
    Group.findOneAndUpdate(
      { name: group },
      { $push: { students: findStudent } },
      { new: true }
    ).then(() => {
      Group.findOne({ name: group }, function (err, group) {
        if (err) {
          res.status(400);
          return;
        }
        User.findOneAndUpdate(
          { name: student },
          { $set: { idGroup: group } },
          { new: true }
        ).then(() => {
          res.status(200).json({ msg: "Ok" });
        });
      });
    });
  });
});

module.exports = router;
