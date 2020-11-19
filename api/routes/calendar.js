const router = require("express").Router();
const Calendar = require ("../models/calendario");

router.get("/all", async (req, res) => {
    Calendar.find(function (err, calendar) {
        if (err) {
          console.log(err);
          return;
        }
        res.status(200).send(calendar);
      });
    });


router.post("/create", async (req, res) => {
    const {title, start, end, allDay} = req.body;
    if (!title || !start || !end || allDay===undefined) {
        return res.status(400).send("Faltan parametros")
    } Calendar.create({ title: title, start: start, end:end, allDay:allDay }, function (err, calendar) {
        if (err) {
          console.log(err);
          return;
        }
        res.status(200).json({ msg: "Ok", calendar });
      })
    })

    router.get("/:id", async (req, res) => {
        const id= req.params.id
        Calendar.findOne({ _id: id })
        .then((event) => {
          res.status(200).json({ msg: "OK", event });
        })
        .catch((err) => {
          console.log(err);
        });
    });

    router.delete("/delete", async (req, res) => {
        const {id} = req.body
        Calendar.deleteOne({ _id: id }, function(err, deleted){
            if(err) {
              console.log(err);
              return     
            }
            res.status(200).json({msg: "Ok"})
          });
        });
    

    module.exports=router
    