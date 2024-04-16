const ProductosModelo = require('../model/modeloRopa');
const { isValidObjectId } = require("mongoose");
// agregar un producto
exports.Productos = async (req, res) => {
  const{nombre,referencia,talla,color,descripcion,precio,categoria}= req.body;

  if (!nombre) {
    return res.status(400).json("Ingresa un nombre de producto");
  }
  if (!referencia) {
    return res.status(400).json("Ingresa un referencia");

  }// else if (referencia){
  //   return res.status(400).json("Ingresa un referencia con numeros y letra en mayuscula ");
    
  // }
  if (!talla) {
    return res.status(400).json("Ingresa un talla a el producto");
  }
  if (!color) {
    return res.status(400).json("Ingresa un color a el producto");
  }
  if (!precio) {
    return res.status(400).json("Ingresa un precio a el producto");
  }else if( isNaN(precio)){
    return res.status(400).json("iEn el campo solo se puede numeros")
  }

  if (!categoria) {
    return res.status(400).json("Ingresa un nombre de categoria al producto");
  }

  try {
    const ropa = await new ProductosModelo({
      nombre,
      referencia,
      talla,
      color,
      descripcion,
      precio,
      categoria,
    })

    const viewRopa = await ropa.save()

    return res.status(200).json(viewRopa)

  } catch (error) {
    console.log(error)
  }
}

// Traer todos los productos
exports.traerProductos = async (req, res)=>{
  try {
    const productos = await ProductosModelo.find()
    res.status(200).json({
      productos,
  });
    
  } catch (error) {
    console.log(error)
  }
}

// Traer un solo producto
exports.traerProductoId = async (req, res)=>{
  try {
    const idP = isValidObjectId(req.params.id);
    if (!idP) {
    return res.status(400).json(`El id no se encontro`);
      
    }
    const productos = await ProductosModelo.findById(req.params.id)
    res.status(200).json({
      productos,
  });
    
  } catch (error) {
    console.log(error)
  }
}
// Traer los de todos de x referencia
exports.traerProductoR = async (req, res)=>{
  try {
    // const idP = isValidObjectId(req.params.id);
    // if (!idP) {
    // return res.status(400).json(`El id no se encontro`);
      
    // }
    const productos = await ProductosModelo.findById(req.params.referencia)
    res.status(200).json({
      productos,
  });
    
  } catch (error) {
    console.log(error)
  }
}
// Actualizar un campo
// Actualizar un barios campos

// Eliminar 