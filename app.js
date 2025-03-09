const express = require("express");
const app = express();

const indexRouter = require("./routes/indexRouter");
const newRouter = require("./routes/newRouter");

const path = require("path");
const ejs = require("ejs");

const assetsPath = path.join(__dirname, "public");
app.set(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/new", newRouter);

app.use((err, req, res, next) => {
	console.error(err);
	res.status(err.status || 500).send(err.message);
});

const PORT = 3000;
app.listen(PORT, (req, res) => console.log("Up and running on port " + PORT));
