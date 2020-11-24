const app = require("./app");
const mongoose = require("mongoose");
const User = require("./models/user");

const database_atlas =
  "mongodb+srv://fayser:Vsl17477@cluster0.bucqc.mongodb.net/<dbname>?retryWrites=true&w=majority";
const database_localhost = "mongodb://localhost/HenryApp"; //if not found-> replace 127.0.0.1:27017

mongoose
  .connect(database_atlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(app.get("port"), () => {
      console.log(`Server on port ${app.get("port")}`);
    });
  });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("DB connected");
});

//--------------------------------SuperUser
const bcrypt = require("bcryptjs");

User.findOneAndUpdate(
  { name: "admin" }, // find a document with that filter
  {
    name: "admin",
    email: "admin@henry.com",
    role: "admin",
    password: bcrypt.hashSync("admin", 10),
  }, // document to insert when nothing was found
  { upsert: true, new: true, runValidators: true }, // options
  function (err, admin) {
    // callback
    if (err) {
      console.log(err);
    } else {
      console.log(
        "\n----Super-user---- \n #name: ",
        admin.name,
        "\n #email: ",
        admin.email,
        "\n #password: ",
        admin.password,
        "\n -----------------\n"
      );
    }
  }
);
