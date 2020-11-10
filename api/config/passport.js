//-----------Autenticaciones-------
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

//----- Modelos-----
const User = require("../models/user");
//-------- Passport Local---------

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      const user = await User.findOne({ email: email });
      if (!user) {
        return done(null, false, {
          message: "Not User Found.",
        });
      } else {
        const match = await user.matchPassword(password);
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect Password" });
        }
      }
    }
  )
);



module.exports = passport;
