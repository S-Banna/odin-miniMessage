const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }));

const indexRouter = require("./routes/indexRouter.js");

const path = require("path");
const ejs = require("ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(err.status || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, (req, res) => console.log("Up and running on port " + PORT));
