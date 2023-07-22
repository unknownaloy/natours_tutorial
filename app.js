const express = require("express");

const userRouter = require("./routes/userRoutes");
const tourRouter = require("./routes/tourRoutes");

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
// 	res.send("Hello from this side");
// });

app.use("/api/v1/user", userRouter);
app.use("/api/v1/tours", tourRouter);

module.exports = app;
