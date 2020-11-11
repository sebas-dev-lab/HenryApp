const router = require("express").Router();
const passport = require("passport");

//----------Logueo-------------
router.post("/login", passport.authenticate("local"), (req, res) => {
  res.send(req.user);
});

//--------- Autenticación Google -----------

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/",
    session: false,
  })
);

//--------- Autenticación Github -----------
router.get(
  "/github",
  passport.authenticate("github", {
    scope: ["email", "profile"],
  })
);
router.get(
  "/github/callback",
  passport.authenticate("github", {
    successRedirect: "http://localhost:3000/",
    session: false,
  })
);
module.exports = router;
