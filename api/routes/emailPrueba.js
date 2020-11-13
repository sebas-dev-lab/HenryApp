require("dotenv").config();
const keys = require("./configMailgun");
const code = keys();
const MAIL_GUN_KEY = code.MAIL_GUN_KEY;
const MAIL_GUN_DOMAIN = code.MAIL_GUN_DOMAIN;

var mailgun = require("mailgun-js")({
  apiKey: MAIL_GUN_KEY,
  domain: MAIL_GUN_DOMAIN,
});
// const mg = mailgun();

console.log(MAIL_GUN_KEY);

const data = {
  from: "HenryApp <lb.lescano.vs@gmial.com>",
  to: "lb.lescano.vs@gmail.com",
  subject: "Bienvenido a Henry",
  text: "Ingresa al campus virtual",
  template: "invitacion.test",
};

mailgun.messages().send(data, function (error, body) {
  console.log(body);
});
