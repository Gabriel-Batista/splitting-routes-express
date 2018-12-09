const data = require('../../data.json');

module.exports = (req, res) => {
  const modelId = req.params.modelId * 1;
  const model = data.models.find((model) => model.id === modelId);

  res.status(200).json({ model });
}

