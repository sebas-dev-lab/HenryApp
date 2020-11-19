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
        .populate("cohorte")
        .then((modules) => {
            res.status(200).json({ msg: "Ok", modules })
        })
        .catch(err => {
            console.log(err.message)
        })
})

//ruta para obtener los modulos de un estudiante

router.get("/all/:user", (req, res) => {
    Module.find(function (err, modules) {
        if (err) {
            console.log(err);
            return;
        };
    })
        .populate("students")
        .populate("cohorte")
        .then((modules) => {
            res.status(200).json({ msg: "Ok", modules })
        })
        .catch(err => {
            console.log(err.message)
        })
})

// ruta para modificar un modulo

router.put("/:name", (req, res) => {
    const name = req.params.name;
    const body = req.body;
    Module.update({ name }, body)
        .then(data => {
            res.status(200).json({ msg: "Ok", data })
        })
        .catch(err => {
            console.log(err.message)
        })
})

// ruta para borrar modulo

router.delete("/:name", (req, res) => {
    const name = req.params.name;
    Module.deleteOne({ name: name }, function (err, data) {
        if (data.deletedCount === 0) {
            res.status(400).json({ msg: "error" })
            return;
        }
        else {
            res.status(200).json({ msg: "Ok" })
        }
    })

})

module.exports = router;