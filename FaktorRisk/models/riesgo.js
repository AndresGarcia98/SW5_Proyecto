var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var riesgoSchema = new Schema({
    code: {
        type: Number,
    },
    riesgo: String,
    descripcion: String,
    causas: String,
    proceso_asociado: [String],
    riesgos_asocidos: [String],
    factor_del_riesgo: [String],
    nivel_1: String,
    nivel_2: String,
    medicion_inherente: {
        probabilidad_ocurrencia: {
            type: Number
        },
        magnitud_impacto: {
            type: Number
        },
        criticidad_inherente: {
            type: Number
        }
    },
    medicion_residual: {
        probabilidad_ocurrencia: {
            type: Number
        },
        magnitud_impacto: {
            type: Number
        },
        criticidad_residual: {
            type: Number
        }
    },
    controles_tratamientos: {
        nombre_control: {
            type: String
        },
        respopnsable_area: {
            type: [String]
        },
        tipo_control: {
            type: String
        },
        naturaleza_control: {
            type: String
        },
        frecuencia_control: {
            type: String
        },
        importancia_control: {
            type: String
        },
        documentacion_control: {
            type: String
        },
        documentacion: {
            type: [String]
        }
    },
    nombre_indicador: String,
    formula_indicador: String,
    meta: String,
    frecuencia: String
})

module.exports = mongoose.model('Riesgos', riesgoSchema);