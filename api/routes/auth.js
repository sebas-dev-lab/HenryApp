const router = require("express").Router();
const passport = require("passport");

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
			res.status(200).json({ errors: false, user: user });
		});   
  })(req, res, next);
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
