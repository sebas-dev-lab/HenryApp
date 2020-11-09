const express = require("express");
const router = express();
const Instructor = require("../models/instructor");
const Cohort = require("../models/cohort");

/*==== Get all instructors ==== */
router.get("/", (req, res) => {
  Instructor.find(function (err, students) {
    if (err) return console.error(err);
  })
    .populate("idCohorte")
    .then((students) => {
      res.status(200).send(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

/*====  Post instructor ====== */
router.post("/", async (req, res) => {
  const { name, lastName, dni, email, password, cohorte } = req.body;
  if (!name && !lastName && !dni && !email && !password && !cohorte) {
    return res.status(400).send("Faltan parametros");
  } else {
    const emailInstructor = await Instructor.findOne({ email: email });
    if (emailInstructor) {
      res.status(400).send("Email existente");
    } else {
      const newInstructor = new Instructor({
        name,
        lastName,
        dni,
        email,
        password,
        cohorte,
      });
      newInstructor.password = await newInstructor.encryptPassword(password);
      await newInstructor.save();
      res.status(200).json({ msg: "OK", admin: newInstructor });
    }
  }
});

/*===== Delete Instructor ====== */
router.delete("/:name", (req, res) => {
  //definir atributo unico para buscar

  const { name } = req.params;

  Student.deleteOne({ name: name }, function (err, deleted) {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).json({ msg: "Ok" });
  });
});

/*===== Put Instructor ====== */

module.exports = router;
