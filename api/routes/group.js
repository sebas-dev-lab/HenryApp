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
router.put("/:group/:pm", (req, res) => {
  const { group, pm } = req.params;  

	Student.find({ name: pm }, function (err, student) {
		if (err) {
			console.log(err);
			return;
		}
		Group.updateOne({ name: group }, { $push: { pms: student } })
			.then(() => {
				res.status(200).json({ msg: "Ok" });
			})
			.catch((err) => {
				console.log(err);
			});
	});
});
module.exports = router;
