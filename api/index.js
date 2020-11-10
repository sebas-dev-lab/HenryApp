const app = require("./app");
const mongoose = require("mongoose");

mongoose
	.connect("mongodb://localhost/HenryApp", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
		useFindAndModify: false
	})
	.then(() => {
		app.listen(app.get("port"), () => {
			console.log(`Server on port ${app.get("port")}`);
		});
	});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	console.log("DB connected");
});
