const express = require("express");
const router = express();

const Group = require("../models/group");
const Student = require("../models/student");

router.get("/all", (req, res) => {
	Group.find(function (err, groups) {
		if (err) {
			console.log(err);
			return;
		}
	})
		.populate("pms")
		.populate("students")
		.then((groups) => {
			res.status(200).json({ msg: "Ok", groups });
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get("/:name", (req, res) => {
	const { name } = req.params;

	Group.find({ name }, function (err, groups) {
		if (err) {
			console.log(err);
			return;
		}
	})
		.populate("Pms")
		.populate("students")
		.then((groups) => {
			res.status(200).json({ msg: "Ok", groups });
		})
		.catch((err) => {
			console.log(err);
		});
});

router.post("/create", (req, res) => {
	const newGroup = req.body;

	Group.create(newGroup, function (err, newGroup) {
		if (err) {
			console.log(err);
			return;
		}
		res.status(200).json({ msg: "Ok", newGroup });
	});
});

//------ Asignar PM al grupo
//---- tambien pone el atributo isPM del estudiante en true

router.put("/:group/pm/:pm", (req, res) => {
  const { group, pm } = req.params; 

  Student.findOneAndUpdate(
    { name: pm }, 
    { $set: { isPM: true}}, 
    { new: true })
      .then((student) => {  
        if(!student){
          res.status(400).json({msg: "Not Found"})
          return
        }        
        Group.updateOne(
          { name: group }, 
          { $push: { pms: student } })
            .then(() => {
              res.status(200).json({ msg: "Ok" });
            })
            .catch((err) => {
              console.log(err);
            });
      })
      .catch((err) => {
        console.log(err);  
      })
});

router.delete("/:group", (req, res) => {
  const { group } = req.params;

  Group.deleteOne({ name: group }, function(err, deleted){
    if(err) {
      console.log(err);
      return     
    }
    res.status(200).json({msg: "Ok"})
  });
});

//------agreg ar alumnos al grupo
// router.put(("/assign/:group/:student", (req, res) => {
//   const { group, student } = req.params;
//   console.log(group, 'entroo');  
//   res.status(200).json({msg:'entro'})
//   Student.find({ name: student }, function(err, student) {
//     if(err) {
//       console.log(err);
//       return  
//     }
//     Group.updateOne({name: group}, { $push: { students: student}})
//       .then(() => {
//         res.status(200).json({ msg: "Ok" });
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   })
//   .catch((err) => {
//     res.status(400).json({msg: err})
//   })
// }));

//ruta para eliminar pms
//ruta para asignar estudiantes en bulk
module.exports = router;
