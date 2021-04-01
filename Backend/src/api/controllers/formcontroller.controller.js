const InsertData = require('../models/data.model');
const Schema = require('../models/data1.model');

// Insert Data
exports.insertvalues = (req, res) => {
  try {
    const newdata = new InsertData(req.body);
    newdata.save().then((response) => {
      res.status(201).json({
        message: 'successfully Added',
        response,
      });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get Schema
exports.getschema = (req, res, next) => {
  try {
    Schema.find().exec((err, data) => res.json(data));
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
// Insert Schema
exports.insertschema = (req, res) => {
  try {
    const newdata = new Schema(req.body);
    newdata.save().then((response) => {
      res.status(201).json({
        message: 'successfully Added',
        response,
      });
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
