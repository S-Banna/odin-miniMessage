const { Router } = require("express");
const path = require("path");
const indexRouter = Router();

const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello World!",
		user: "Charles",
		added: new Date(),
	},
	{
		text: "Number Three!",
		user: "Gertrude",
		added: new Date(),
	},
];
