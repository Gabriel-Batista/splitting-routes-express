const data = require("../../../data.json");

module.exports = (req, res) => {
  const modelId = req.params.modelId * 1;
  const cars = data.cars.filter(car => car.modelId === modelId);

  res.status(200).json({ cars })
};
