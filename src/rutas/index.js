const express = require ('express');
const router = express.Router();
const modelo = require ('../model/datos')();

const Valor = require('../model/datos');

router.get('/', async (req, res) => {
    const tablas = await Valor.find();
    console.log(tablas);
    res.render('index.ejs',{
        tablas
    });
});
router.post('/add', async (req, res) => {
    const tabla = new Valor(req.body);
    await tabla.save();
    res.redirect('/');
});

module.exports = router;