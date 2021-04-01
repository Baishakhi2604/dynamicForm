// const mongoose = require('mongoose');

// const Schema = mongoose.Schema({

// });

// module.exports = mongoose.model('Data', Schema);

const Mongoose = require('mongoose');

const modelName = 'data';

// Model without any fixed schema
const Schema = new Mongoose.Schema(
  {},
  { strict: false },
);

module.exports = Mongoose.model(modelName, Schema);
