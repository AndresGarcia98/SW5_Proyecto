var express = require('express');
var router = express.Router();
var riesgoControllerAPI = require('../../controllers/API/riesgoControllerAPI');


router.get('/', riesgoControllerAPI.risk_list);
router.post('/evaluar_riesgo/generar_informe', riesgoControllerAPI.riesgo_create);
router.get('/buscar_riesgo', riesgoControllerAPI.riesgo_getOne);
router.delete('/eliminar_riesgo', riesgoControllerAPI.riesgo_deleteOne);
router.put('/actualizar_riesgo', riesgoControllerAPI.riesgo_updateOne);
router.get('/mapear_riesgos', riesgoControllerAPI.map_risk);
router.get('/informe_gerencial', riesgoControllerAPI.gerential_inform);

module.exports = router;