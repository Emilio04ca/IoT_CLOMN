const express = require ('express');
const log = require('morgan');
const app = express();
const bodyParse = require ('body-parser');

const file = require('path')
const mongoose = require('mongoose');

const indexRoutas = require('./rutas/index.js');


//rutas

//escucha servidor
app.set('port', process.env.PORT || 3000);
app.set('views', file.join(__dirname, 'views'));
app.set('view egline', 'ejs');

//conexion BD

mongoose.connect('mongodb+srv://Rex_T:lcJi9HK1kMemWbb0@cluster0.wfe5d.mongodb.net/IoT?retryWrites=true&w=majority')
.then(bd => console.log('Conexion Exitosa')).catch(err =>console.log(err)); 
//midelware
app.use(log('dev'));
app.use(bodyParse.urlencoded({extended:false}));

app.use('/', indexRoutas);

app.listen(app.get('port'), () =>{console.log('servidor funcionando', app.get('port'))});
