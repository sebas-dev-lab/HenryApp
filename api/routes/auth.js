const router = require("express").Router();
const passport = require("passport");

//----------Logueo-------------
router.post(
  "/login",
  passport.authenticate("local", {
    session: true,
  }),
  (req, res) => {
    res.send(req.user);
  }
);

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

router.post("/logout", (req, res) => {
  if (req.isAuthenticated()) {
    req.logout();
    res.sendStatus(200).clearCookie("connect.sid", {
      path: "/",
      secure: false,
      httpOnly: false,
    });
    req.session.destroy();
  } else {
    res.status(400).send("No estabas logeado :/");
  }
});

module.exports = router;
