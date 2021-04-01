const express = require('express');
const formcontroller = require('../../controllers/formcontroller.controller');

// const checkAuth = require('../middleware/check-auth');
// const { authorize} = require('../../middlewares/auth');


const router = express.Router();

router.post('/insertvalues', formcontroller.insertvalues);
router.get('/getschema', formcontroller.getschema);
router.post('/insertschema', formcontroller.insertschema);
module.exports = router;
