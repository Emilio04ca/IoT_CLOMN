var mongoose = require('mongoose');
var esquema =  mongoose.Schema;

const tablas = new esquema({
    porcentaje: String,
    presencia: String ,
    fecha: Date

});
module.exports = mongoose.model('tablas', tablas);
