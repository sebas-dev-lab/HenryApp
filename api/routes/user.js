const express = require("express");
const router = express();

const User = require("../models/user");
const Cohort = require("../models/cohort");
const Group = require("../models/group");

router.get("/all", (req, res) => {
	User.find(function (err, students) {
		if (err) return console.error(err);
	})
		.populate("cohorte")
		.populate("group")
		.then((students) => {
			res.status(200).send(students);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get("/", (req, res) => {
	const { name } = req.body;

	User.findOne({ name: name })
		.populate("idCohorte")
		.populate("PP")
		.then((user) => {
			res.status(200).json({ msg: "OK", user });
		})
		.catch((err) => {
			console.log(err);
		});
});

router.post("/create", (req, res) => {
	const newUser = req.body;
	User.create(newUser, function (err, newUser) {
		if (err) {
			console.log(err);
			return;
		}
		res.status(200).json({ msg: "OK", user: newUser });
	});
});

router.delete("/:name", (req, res) => {
	//definir atributo unico para buscar

	const { name } = req.params;

	User.deleteOne({ name: name }, function (err, deleted) {
		if (err) {
			console.log(err);
			return;
		}
		res.status(200).json({ msg: "Ok" });
	});
});

router.put("/cohort/:student/:cohort", (req, res) => {
	const { student, cohort } = req.params;

	Cohort.findOne({ name: cohort }, function (err, cohort) {
		if (err) {
			console.log(err);
			return;
		}
		User.update({ name: student }, { $set: { idCohorte: cohort } }).then(
			() => {
				res.status(200).json({ msg: "Ok" });
			}
		);
	});
});

router.put("/group/:student/:group", (req, res) => {
	const { student, group } = req.params;
	//asignar grupo al estudiante
	//sumar el estudiante al array del grupo
	User.findOne({ name: student }, function(err, findStudent){	
		if(err){
			res.status(400)
			return
		}
		Group.findOneAndUpdate(
			{ name: group }, 
			{ $push: { students: findStudent }}, 
			{new: true}
		)
			.then(() => {				
				Group.findOne({ name: group }, function(err, group){
					if(err){
						res.status(400)
						return
					}
					User.findOneAndUpdate(
						{ name: student }, 
						{ $set: { idGroup: group }}, 
						{new: true}
					)	
						.then(() => {
							res.status(200).json({msg: "Ok"})
						})
				})
			})				
	})
})
			

module.exports = router;
