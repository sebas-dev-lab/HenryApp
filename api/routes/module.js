const express = require("express");
const router = express();

//---Modelos----
const User = require("../models/user");
const Cohort = require("../models/cohort");
const Module = require("../models/module");

//ruta para crear modulo

router.post("/create", (req, res) => {
    const newModule = req.body;
    Module.create(newModule, function (err, newModule) {
        if (err) {
            console.log(err);
            return;
        }
        res.status(200).json({ msg: "Ok", newModule });
    });
});

//ruta para obtener los modulos

router.get("/all", (req, res) => {
    Module.find(function (err, modules) {
        if (err) {
            console.log(err);
            return;
        }
    })
        .populate("students")
        .populate("cohort")
        .then((modules) => {
            res.status(200).json({ msg: "Ok", modules })
        })
        .catch(err => {
            console.log(err.message)
        })
})

module.exports = router;