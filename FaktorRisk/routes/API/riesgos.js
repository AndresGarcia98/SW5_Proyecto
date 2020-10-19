var express = require('express');
var router = express.Router();
var riesgoControllerAPI = require('../../controllers/API/riesgoControllerAPI');

router.get('/', riesgoControllerAPI.risk_list);
router.post('/create', riesgoControllerAPI.riesgo_create);
router.get('/riesgo', riesgoControllerAPI.riesgo_getOne);
router.delete('/delete', riesgoControllerAPI.riesgo_deleteOne);
router.put('/update', riesgoControllerAPI.riesgo_updateOne);


module.exports = router;