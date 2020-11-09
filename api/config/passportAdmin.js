//-----------Autenticaciones-------
const passport = require("passport");
//const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

//----- Modelos-----
const Student = require("../models/student");
const Admin = require("../models/admin");
const Instructor = require("../models/instructor");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

//-------- Passport Local---------

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      const user = await Admin.findOne({ email: email });
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
// passport.use(
//   new LocalStrategy(
//     {
//       usernameField: "email",
//       passwordField: "password",
//     },
//     async (email, password, done) => {
//       const user = await Student.findOne({ email: email });
//       if (!user) {
//         return done(null, false, {
//           message: "Not User Found.",
//         });
//       } else {
//         const match = await user.matchPassword(password);
//         if (match) {
//           return done(null, user);
//         } else {
//           return done(null, false, { message: "Incorrect Password" });
//         }
//       }
//     }
//   )
// );

module.exports = passport;
