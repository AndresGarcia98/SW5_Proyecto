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

exports.gerential_inform = function(req, res) {

}