// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign
const app = require('./config/express');
const mongoose = require('./config/mongoose');
const { port, env } = require('./config/vars');
const logger = require('./config/logger');

// open mongoose connection
mongoose.connect();

// listen to requests
app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

/**
* Exports express
* @public
*/
module.exports = app;
