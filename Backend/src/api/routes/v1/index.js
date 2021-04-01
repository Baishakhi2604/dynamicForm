const express = require('express');
const form = require('./userdefinedschema');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

/**
 * GET v1/docs
 */

router.use('/dynamicform', form);

module.exports = router;
