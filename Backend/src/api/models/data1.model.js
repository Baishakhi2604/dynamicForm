// const mongoose = require('mongoose');

// const Schema1 = mongoose.Schema({
//   code: { type: String },
// });

// module.exports = mongoose.model('userdefinedschemas', Schema1);

const Mongoose = require('mongoose');

const modelName = 'userdefinedschema';

// Model without any fixed schema
const userSchema = new Mongoose.Schema(
  { },
  { strict: false },
);
const usermodel = Mongoose.model(modelName, userSchema);

module.exports = usermodel;
