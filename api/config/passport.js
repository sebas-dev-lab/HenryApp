//-----------Autenticaciones-------
const passport = require("passport");
//const session = require("express-session");
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
      const user = await User.find();

      if (!user) {
        return done(null, false, {
          message: "Not User Found.",
        });
      } else {
        const match = await user.matchPassword(password);
        console.log(match);
        if (match) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect Password" });
        }
      }
    }
  )
);

//---------Passport Serializer
passport.serializeUser((user, done) => done(null, user.id));

//---------Passport Deserializer
passport.deserializeUser(function (id, done) {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
