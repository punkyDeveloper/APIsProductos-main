const vistas = require('../controller/productos');

// eslint-disable-next-line no-unused-vars

const express = require('express');
// eslint-disable-next-line new-cap
const router =express.Router();


router.post('/ropaguardar', vistas.Productos);

router.get('/ropa' , vistas.traerProductos)
router.get('/ropa/:id', vistas.traerProductoId)
router.get('/ropas/:referencia',vistas.traerProductoR)

module.exports=router;