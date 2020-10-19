var Riesgo = require('../../models/riesgo');

exports.risk_list = function(req, res) {
    Riesgo.find({}, (err, data) => {
        if (err) console.log(err);
        else res.send(data)
    });
}

exports.riesgo_create = function(req, res) {
    //var _id = new mongoose.Schema.Types.ObjectId()
    var riesgo = new Riesgo({
        code: req.body.code,
        riesgo: req.body.riesgo,
        descripcion: req.body.descripcion,
        causas: req.causas,
        proceso_asociado: req.body.proceso_asociado,
        riesgos_asociados: req.body.riesgos_asocidos,
        factor_del_riesgo: req.body.factor_del_riesgo,
        nivel_1: req.body.nivel_1,
        nivel_2: req.body.nivel_2,
        medicion_inherente: req.bodymedicion_inherente,
        medicion_residual: req.body.medicion_residual,
        controles_tratamientos: req.body.controles_tratamientos,
        nombre_indicador: req.body.nombre_indicador,
        formula_indicador: req.body.formula_indicador,
        meta: req.body.meta,
        frecuencia: req.body.frecuencia
    });

    Riesgo.create(riesgo, (err) => {
        if (err) console.log(err);
        else res.send(riesgo)
    });

}

exports.riesgo_getOne = function(req, res) {
    Riesgo.findOne({ code: req.body.code }, (err, data) => {
        if (err) console.log(err);
        else res.send(data)
    });
}

exports.riesgo_deleteOne = function(req, res) {
    Riesgo.findOneAndRemove({ code: req.body.code }, (err, data) => {
        if (err) console.log(err);
        else res.send(data)
    });
}

exports.riesgo_updateOne = function(req, res) {
    Riesgo.findOneAndUpdate({ code: req.body.code }, {
        riesgo: req.body.riesgo,
        descripcion: req.body.descripcion,
        causas: req.causas,
        proceso_asociado: req.body.proceso_asociado,
        riesgos_asociados: req.body.riesgos_asocidos,
        factor_del_riesgo: req.body.factor_del_riesgo,
        nivel_1: req.body.nivel_1,
        nivel_2: req.body.nivel_2,
        medicion_inherente: req.bodymedicion_inherente,
        medicion_residual: req.body.medicion_residual,
        controles_tratamientos: req.body.controles_tratamientos,
        nombre_indicador: req.body.nombre_indicador,
        formula_indicador: req.body.formula_indicador,
        meta: req.body.meta,
        frecuencia: req.body.frecuencia
    }, (err, data) => {
        if (err) console.log(err);
        else res.send(data)
    });
}