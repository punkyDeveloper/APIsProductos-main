const mongoose = require('../config/connectionMongo');

const SchemnaProductos =  mongoose.Schema({
  nombre: {
    type: String,
    required: [true, "Se requiere un nombre del producto"]
  },
  referencia: {
    type: String,
    required: [true, "Se requiere la referencia"]
  },
  talla: {
    type: String,
    required: [true, "Se requiere la talla"]
  },
  color: {
    type: String,
    required: [true, "Se requiere el color"]
  },
  descripcion: {
    type: String
  },
  precio: {
    type: Number,
    required: [true, "Se requiere el precio"]
  },
  categoria: {
    type: String,
    required: [true, "Se requiere una categoría"]
  }
});

const nuevoProducto = mongoose.model('productos', SchemnaProductos);
module.exports = nuevoProducto;
