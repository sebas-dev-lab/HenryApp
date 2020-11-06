const express = require("express");
const router = express();

const Student = require("../models/student");

router.get("/all", (req, res) => {
	Student.find(function (err, students) {
		if (err) return console.error(err);
		return students;
	})
		.then((students) => {
			res.status(200).send(students);
		})
		.catch((err) => {
			console.log(err);
		});
});

router.get("/", (req, res) => {
	const { name } = req.body;

	Student.findOne({ name: name }, function (err, students) {
		if (err) return console.error(err);
		return students;
	})
		.then((students) => {
			res.status(200).send(students);
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

module.exports = router;
