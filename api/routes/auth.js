const router = require("express").Router();
const passport = require("passport");

//----------Logueo-------------
router.post("/login", passport.authenticate("local"), (req, res) => {
  console.log(req);
  res.send(req.user);
});

module.exports = router;
