const models = require("express").Router();
const all = require("./all");
const single = require("./single");
const cars = require("./cars");
const data = require("../../data.json");

models.params((req, res, next, value) => {
  const model = data.models.find(model => model.id === value * 1);

  if (model) {
    req["model"] = model;
    next();
  } else {
    res.status(404).json({message:"The modelId is Invalid!"})
  }
});

models.use("/:modelId/cars", cars);

models.get("/", all);
models.get("/:modelId", single);

module.exports = models;
