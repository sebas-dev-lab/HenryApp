const { Schema, model } = require("mongoose");

const bcrypt = require("bcryptjs");

const adminSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dni: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Admin",
  },
});
adminSchema.plugin(require("mongoose-autopopulate"));

//------Encriptando el password--------
//prettier-ignore
adminSchema.methods.encryptPassword = async password => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

//------Comparando password----
adminSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("Admin", adminSchema);
