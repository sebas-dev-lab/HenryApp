//-----------Autenticaciones-------
const passport = require("passport");
//const session = require("express-session");
const LocalStrategy = require("passport-local").Strategy;

//----- Modelos-----
const Student = require("../api/models/student");
const Admin = require("../api/models/admin");
const Instructor = require("../api/models/instructor");

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
      (email, password, done) => {
        const user = await User.findOne({ where: { email: email } })
            if (!user) {
              return done(null, false, {
                message: "Not User Found.",
              }); 
            }else{
                user
              }
                       
          }))
          
  
  module.exports = app;