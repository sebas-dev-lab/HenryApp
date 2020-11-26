require("dotenv").config();

const express = require("express");
const router = express();
const Clases = require("../models/clases");

//--------------Post------------------------
router.post("/create", (req, res) => {
    const { link } = req.body
    Clases.create({
        link
    }, function(err, data) {
        if (err) {
            console.log(err);
            return;
        }
        res.status(200).json({ msg: "Ok", data });
    });
})

//---------------Get----------------

router.get("/all", (req, res, next) => {
    Clases.find(function(err, clases) {
        if (err) {
            console.log(err);
            return;
        }
        res.status(200).json(clases);
    });
});


module.exports = router;