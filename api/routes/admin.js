const router = require("express").Router();
const User = require("../models/user");

/*===== Create Admin ===== */
router.post("/", async (req, res) => {
  const { name, lastName, dni, email, password } = req.body;
  if (!name && !lastName && !dni && !email && !password) {
    return res.status(400).send("Faltan parametros");
  } else {
    const dnilAdmin = await User.findOne({ dni: dni });
    if (dnilAdmin) {
      res.status(400).send("DNI existente");
    } else {
      const newAdmin = new User({ name, lastName, dni, email, password });
      newAdmin.role = "admin";
      newAdmin.password = await newAdmin.encryptPassword(password);
      await newAdmin.save();
      res.status(200).json({ msg: "OK", admin: newAdmin });
    }
  }
});

/*=====  Get all admins ===== */
router.get("/all", (req, res) => {
  User.find({ role: "admin" })
    .then((admins) => {
      res.status(200).send(admins);
    })
    .catch((err) => {
      console.log(err);
    });
});

/*===== Get OneAdmin by dni ===== */
router.get("/:dni", (req, res) => {
  const { dni } = req.params;

  User.findOne({ dni: dni })
    .then((user) => {
      res.status(200).json({ msg: "OK", user });
    })
    .catch((err) => {
      console.log(err);
    });
});

/*===== Delete students===== */
router.delete("/:dni", (req, res) => {
  const { dni } = req.params;

  User.deleteOne({ dni: dni }, function (err, deleted) {
    if (err) {
      console.log(err);
      return;
    }
    res.status(200).json({ msg: "Ok" });
  });
});

module.exports = router;
