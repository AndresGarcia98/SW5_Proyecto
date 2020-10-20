var Riesgo = require('../../models/riesgo');

exports.map_general_risk = function(req, res) {
    Riesgo.countDocuments({}, (err, result) => {
        if (err) console.log(err);
        else { res.json({ message: "el número de riesgos de lavado de activos son: " + result }) }
    });
}