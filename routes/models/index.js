const models = require("express").Router();
const all = require("./all");
const single = require('./single');
const cars = require('./cars')

models.use('/:modelId/cars', cars)

models.get('/', all)
models.get('/:modelId', single)

module.exports = models;