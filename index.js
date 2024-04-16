const express = require('express');
const app = express();
// const path = require('path');
const dotenv = require('dotenv');

dotenv.config();
const PORT = process.env.PUERTO || 3000;
const router = require('./routes/ruta');

// motor de plantillas
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, '/frontend/views/pages'));


app.use(express.json());

// app.use(cookieParser());
// es como que esta bien la peticion y hace no se envie basio lo de la base de datos
app.use(express.urlencoded({extended: true}));



// rutas
app.use('/v1/', router);

// puesto
app.listen(PORT, () => {
  console.log(`Conectado en el puerto http://localhost:${PORT}/v1/`);
});