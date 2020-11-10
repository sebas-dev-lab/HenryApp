const router = require("express").Router();
const passport = require("passport");

//----------Logueo-------------
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

module.exports = router;
