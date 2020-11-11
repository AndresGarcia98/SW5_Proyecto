var Riesgo = require('../../models/riesgo');

exports.map_general_risk = function(req, res) {
    var num_doc = Riesgo.countDocuments({}, (err, result) => {
        if (err) return "Lo sentimos ha surgido un problema y no podemos realizar tu petición";
        else return result;
    });
    if (num_doc != "Lo sentimos ha surgido un problema y no podemos realizar tu petición") {
        Riesgo.find({}, (err, data) => {
            if (err) res.json({ mensaje: "Lo sentimos ha surgido un problema y no podemos realizar tu petición" });
            else res.send(data);
        });
    } else {
        res.json({
            mensaje: num_doc
        });
    }
}

exports.processes_inform = function(req, res) {
    var num_doc = Riesgo.countDocuments({}, (err, result) => {
        if (err) return "Lo sentimos ha surgido un problema y no podemos realizar tu petición";
        else return result;
    });
    if (num_doc != "Lo sentimos ha surgido un problema y no podemos realizar tu petición") {
        Riesgo.aggregate(
            [{$match: {
                "id_user": req.body.id_user
              }}, {$unwind: {
                path: '$proceso_asociado'
              }}, {$group: {
                _id: "$proceso_asociado",
                datos_riesgo: {
                  $push: {"code": "$code",
                  "nombre": "$riesgo",
                  "descripcion":"$descripcion",
                  "controles_tratamientos":"$controles_tratamientos",
                  "riesgo_asociado":"$riesgo_asociado",
                  "causas": "$causas",
                  "frecuencia":"$frecuencia",
                  "formula_indicador":"$formula_indicador",
                  "medicion_inherente": "$medicion_inherente",
                  "medicion_residual": "$medicion_residual",
                          }
                }
              }}],
            (err, data) => {
                if (err) res.status(500).json({
                    mensaje: "Lo sentimos  cliente " + req.body.id_user + " ha surgido un problema y no podemos mostrar el informe por procesos de riesgo integral," +
                        "puede ser un problema nuestro o revisa que ingresaste un ID de usuario. Disculpa por las molestias "
                });
                else res.send(data)
            });
    } else {
        res.json({
            mensaje: num_doc
        });
    }
    

}