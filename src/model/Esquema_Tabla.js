var mongoose = require('mongoose');
var esquema =  mongoose.Schema;

const Registros = new esquema({
    Id_Modulo: String,
    Porcentaje: Number,
    Presencia: Number ,
    Fecha: {
        type: Date, 
        default: Date.now
    }

});
module.exports = mongoose.model('Registros', Registros);
