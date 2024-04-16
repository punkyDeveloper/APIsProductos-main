const mongoose = require('mongoose');


  const uri =`mongodb+srv://${process.env.DATOS_USER}:${process.env.DATOS_CONTRA}@proyectos.iqyucof.mongodb.net/${process.env.DATOS_DATA}?retryWrites=true&w=majority`;
  mongoose.connect(uri);
  module.exports = mongoose;