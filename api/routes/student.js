const express = require("express");
const router = express();

const Student = require("../models/student");
const Cohort = require("../models/cohort");

router.get("/all", (req, res) => {
	Student.find(function (err, students) {
		if (err) return console.error(err);
	})
		.populate("idCohorte")
		.then((students) => {
			res.status(200).send(students);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get("/", (req, res) => {
	const { name } = req.body;

	Student.findOne({ name: name })
		.populate("idCohorte")
		.then((students) => {
			res.status(200).json({ msg: "OK", students });
		})
		.catch((err) => {
			console.log(err);
		});
});

router.post("/create", (req, res) => {
	const newStudent = req.body;
	Student.create(newStudent, function (err, newStudent) {
		if (err) {
			console.log(err);
			return;
		}
		res.status(200).json({ msg: "OK", student: newStudent });
	});
});

router.delete("/:name", (req, res) => {
	//definir atributo unico para buscar

	const { name } = req.params;

	Student.deleteOne({ name: name }, function (err, deleted) {
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
		Student.update({ name: student }, { $set: { idCohorte: cohort } }).then(
			() => {
				res.status(200).json({ msg: "Ok" });
			}
		);
	});
});

module.exports = router;
