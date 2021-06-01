var mongoose = require('mongoose');
var esquema =  mongoose.Schema;

const Registros = new esquema({
    ID: String,
    porcentaje: String,
    presencia: String ,
    Fecha: {
        type: Date, 
        default: Date.now
    }

});
module.exports = mongoose.model('Registros', Registros);
