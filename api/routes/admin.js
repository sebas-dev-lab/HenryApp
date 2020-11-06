const router = require("express").Router();
const { Admin } = require("../db.js");

router.post("/", (req, res) => {
  const newAdmin = req.body;
  Admin.create({
    nombre: "admin",
    apellifo: "admin",
    DNI: 1236464,
    email: "admin@henry.com",
    password: "henry",
  });
  if (err) {
    console.log(err);
    return;
  }
  res.status(200).json({ msg: "OK", student: newStudent });
});

module.exports = router;
