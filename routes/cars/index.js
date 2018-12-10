const cars = require("express").Router();
const single = require("./single.js");
const all = require("./all.js");

cars.use("/:carId", single);
cars.use("/", all);

module.exports = cars;
