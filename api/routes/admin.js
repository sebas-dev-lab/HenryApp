const router = require("express").Router();
const Admin = require("../models/admin");

router.post("/", (req, res) => {
  //const { name, lastName, Dni, email, password } = req.body;

  const admin = {
    name: "admin",
    lastName: "admin",
    DNI: 12222,
    email: "admin@Henryadmin.com",
    password: "henry",
  };
  //prettier-ignore
  Admin.create(admin, function (err, newAdmin) {
		if (err) {
			console.log(err);
			return;
		}
		res.status(200).json({ msg: "OK", admin: newAdmin });
  });
});

router.get("/", (req, res) => {
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
