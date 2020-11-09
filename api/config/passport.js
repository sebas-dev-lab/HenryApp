//-----------Autenticaciones-------
const passport = require("passport");
//const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

//----- Modelos-----
const Student = require("../models/student");
const Admin = require("../models/admin");
const Instructor = require("../models/instructor");

const User = {
  Admin,
  Instructor,
  Student,
};

//-------- Passport Local---------

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done, status) => {
      // let status = status;
      //prettier-ignore
      if (status === "Admin") var usuario= Admin
      if (status === "Student") var usuario = Student;
      if (status === "Instructor") var usuario = Instructor;

      const user = await usuario.findOne({ where: { email: email } });
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

//---------Passport Serializer
passport.serializeUser((user, done) => done(null, user.id));

//---------Passport Deserializer
passport.deserializeUser(function (id, done) {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
