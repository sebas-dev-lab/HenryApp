const router = require("express").Router();
const Admin = require("../models/admin");

router.post("/", async (req, res) => {
  const { name, lastName, dni, email, password } = req.body;
  if (!name && !lastName && !dni && !email && !password) {
    return res.status(400).send("Faltan parametros");
  } else {
    const emailAdmin = await Admin.findOne({ email: email });
    if (emailAdmin) {
      res.status(400).send("Email existente");
    } else {
      const newAdmin = new Admin({ name, lastName, dni, email, password });
      newAdmin.password = await newAdmin.encryptPassword(password);
      await newAdmin.save();
      res.status(200).json({ msg: "OK", admin: newAdmin });
    }
  }
});

router.get("/all", (req, res) => {
  Admin.find(function (err, admins) {
    if (err) return console.error(err);
    return admins;
  })
    .then((admins) => {
      res.status(200).send(admins);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
