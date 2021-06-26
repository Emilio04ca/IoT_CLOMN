const express = require ('express');
const router = express.Router();
const model = require('../model/Esquema_Tabla')();
const Valor_Squema = require('../model/Esquema_Tabla');

router.get('/', async (req, res) => {
    const tablas = await Valor_Squema.find();
    //console.log(tablas);
     res.render('Registros copy 2.ejs',{
        tablas
    });
});
router.post('/add', async (req, res) => {
    const tabla = new Valor_Squema(req.body);
    await tabla.save();
    res.json(tabla)
   // res.render('Registros copy 2.ejs', {tabla});
   
});

module.exports = router;