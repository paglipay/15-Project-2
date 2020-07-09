var express = require('express');
var router  = express.Router();

var fullcalendar_controller = require('../controllers/fullcalendar_controller');

router.get('/', fullcalendar_controller.index);

module.exports = router;