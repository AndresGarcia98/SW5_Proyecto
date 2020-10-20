var express = require('express');
var router = express.Router();
var riesgoIntegraControllerAPI = require('../../controllers/API/riesgoIntegralControllerAPI');

//Rutas del riesgo integral
router.get('/mapear_riesgos_generales', riesgoIntegraControllerAPI.map_general_risk);
module.exports = router;