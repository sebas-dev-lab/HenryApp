const router = require("express").Router();
const passport = require("passport");
const checkAuthentication = require("../helpers/verifySession");
//----------Logueo-------------
router.post("/login", (req, res, next) => {
  passport.authenticate("local", { session: true }, (err, user, info) => {
    if (err) {
      res.status(500).json({ message: "error" });
      return;
    }
    if (!user) {
      res.status(401).json({ message: "user" });
      return;
    }
    req.login(user, (error) => {
      if (error) {
        res.status(500).json({ message: "no guardado" });
        return;
      }
      console.log(req.session);

      res.status(200).json({ errors: false, user: user });
    });
  })(req, res, next);
});

router.get("/", checkAuthentication, (req, res) => {
  console.log(req.user);
  res.status(200).json(req.user);
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

router.post("/logout", (req, res) => {
  req.logout();

  res.sendStatus(200);
});

module.exports = router;
