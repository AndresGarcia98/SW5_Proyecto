var express = require('express');
var router = express.Router();
var riesgoControllerAPI = require('../../controllers/API/riesgoControllerAPI');

router.get('/', riesgoControllerAPI.risk_list);
router.post('/create', riesgoControllerAPI.riesgo_create);
router.delete('/delete', riesgoControllerAPI.riesgo_create);

module.exports = router;