const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const DB = process.env.DATABASE.replace(
	"<PASSWORD>",
	process.env.DATABASE_PASSWORD,
);

mongoose.connect(DB).then(() => {
	console.log("DB connection successful");
});

// const testTour = new Tour({
// 	name: "Things Fall Apart",
// 	rating: 4.7,
// 	price: 497,
// });

// testTour.save().then(doc => {
// 	console.log("Saved =>", doc);
// }).catch(err => {
// 	console.log("Error =>", err);
// });

const app = require("./app");

const port = 3000;

app.listen(port, () => {
	console.log(`App is listening on port ${port}`);
});
