const express = require("express");
const router = express();

//---Modelos----
const User = require("../models/user");
const Cohort = require("../models/cohort");
const Modulo = require("../models/modulo");

router.post("/create", (req, res) => {
    const newModulo = req.body;
    Modulo.create(newModulo, function (err, newModulo) {
        if (err) {
            console.log(err);
            return;
        }
        res.status(200).json({ msg: "Ok", newModulo });
    });
});

module.exports = router;