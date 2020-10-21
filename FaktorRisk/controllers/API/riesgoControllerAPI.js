var Riesgo = require('../../models/riesgo');

exports.risk_list = function(req, res) {
    Riesgo.find({}, (err, data) => {
        if (err) res.json({
            mensaje: "Lo sentimos ha surgido un problema y no podemos mostrarte los riesgos de lavado de activo. Disculpa por las molestias"
        });
        else res.send(data)
    });
}

exports.riesgo_create = function(req, res) {
    //var _id = new mongoose.Schema.Types.ObjectId()
    var riesgo = new Riesgo({
        code: req.body.code,
        proceso_asociado: req.body.proceso_asociado,
        riesgo: req.body.riesgo,
        descripcion: req.body.descripcion,
        riesgos_asociados: req.body.riesgos_asocidos,
        causas: req.causas,
        factor_del_riesgo: req.body.factor_del_riesgo,
        nivel_1: req.body.nivel_1,
        nivel_2: req.body.nivel_2,
        medicion_inherente: req.body.medicion_inherente,
        medicion_residual: req.body.medicion_residual,
        controles_tratamientos: req.body.controles_tratamientos,
        nombre_indicador: req.body.nombre_indicador,
        formula_indicador: req.body.formula_indicador,
        meta: req.body.meta,
        frecuencia: req.body.frecuencia
    });

    Riesgo.create(riesgo, (err) => {
        if (err) res.json({
            mensaje: "Lo sentimos ha surgido un problema y no podemos agregar  el riesgo número " +
                req.body.code + " a los riesgos de lavado de activos, puede ser un problema nuestro o revisa que ya no haya sido guardado un riesgo con el código " +
                req.body.code + ". Disculpa por las molestias"
        });
        else res.send(riesgo)
    });

}

exports.riesgo_getOne = function(req, res) {
    Riesgo.findOne({ code: req.body.code }, (err, data) => {
        if (err) res.Status(500).json({
            mensaje: "Lo sentimos ha surgido un problema y no podemos encontrar el riesgo con código " +
                req.body.code + " en los riesgos de lavado de activos, puede ser un problema nuestro o revisa exista un riesgo guardado con el código" +
                req.body.code + ". Disculpa por las molestias"
        });
        else res.send(data)
    });
}

exports.riesgo_deleteOne = function(req, res) {
    Riesgo.findOneAndRemove({ code: req.body.code }, (err, data) => {
        if (err) res.json({
            mensaje: "Lo sentimos ha surgido un problema y no podemos eliminar el riesgo con código " +
                req.body.code + " de los riesgos de lavado de activos, puede ser un problema nuestro o revisa exista un riesgo guardado con el código" +
                req.body.code + ". Disculpa por las molestias"
        });
        else res.send(data)
    });
}

exports.riesgo_updateOne = function(req, res) {
    Riesgo.findOneAndUpdate({ code: req.body.code }, {
        proceso_asociado: req.body.proceso_asociado,
        riesgo: req.body.riesgo,
        descripcion: req.body.descripcion,
        riesgos_asociados: req.body.riesgos_asociados,
        causas: req.causas,
        factor_del_riesgo: req.body.factor_del_riesgo,
        nivel_1: req.body.nivel_1,
        medicion_inherente: req.body.medicion_inherente,
        medicion_residual: req.body.medicion_residual,
        controles_tratamientos: req.body.controles_tratamientos,
        nombre_indicador: req.body.nombre_indicador,
        formula_indicador: req.body.formula_indicador,
        meta: req.body.meta,
        frecuencia: req.body.frecuencia
    }, (err, data) => {
        if (err) res.json({
            mensaje: "Lo sentimos ha surgido un problema y no podemos actualizar el riesgo con código " +
                req.body.code + " en los riesgos de lavado de activos, puede ser un problema nuestro o revisa exista un riesgo guardado con el código" +
                req.body.code + ". Disculpa por las molestias"
        });
        else res.send(data)
    });
}

exports.map_risk = function(req, res) {
    Riesgo.aggregate(
        [{
            '$replaceWith': {
                'code': '$code',
                'nombre': '$riesgo',
                'descripcion': '$descripcion',
                'proceso_asociado': '$proceso_asociado',
                'riesgos_asociados': '$riesgos_asociados',
                'factores_asociados': '$factor_del_riesgo',
                'datos_matriz_inherente': '$medicion_inherente',
                'datos_matriz_residual': '$medicion_residual'
            }
        }],
        (err, data) => {
            if (err) res.json({
                mensaje: "Lo sentimos ha surgido un problema y no podemos mostrar el mapa de los riesgos de lavado de activos," +
                    "puede ser un problema nuestro o revisa que existan riesgos guardaos. Disculpa por las molestias "
            });
            else res.send(data)
        });
}
exports.gerential_inform = function(req, res) {
    Riesgo.aggregate(
        [{
            '$replaceWith': {
                'code': '$code',
                'nombre': '$riesgo',
                'descripcion': '$descripcion',
                'proceso_asociado': '$proceso_asociado',
                'riesgos_asociados': '$riesgos_asociados',
                'factores_asociados': '$factor_del_riesgo',
                'datos_matriz_inherente': '$medicion_inherente',
                'datos_matriz_residual': '$medicion_residual'
            }
        }],
        (err, data) => {
            if (err) res.json({
                mensaje: "Lo sentimos ha surgido un problema y no podemos mostrar el informe gerencial de los riesgos de lavado de activos," +
                    "puede se un problema nuestro o revisa que existan riesgos guardaos. Disculpa por las molestias "
            });
            else res.send(data)
        });
}