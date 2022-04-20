const express = require('express');
const cors = require('cors');

require('dotenv').config(); //para agregar variables de entorno

// console.log( process.env )  ver puerto configurado

// Crear el servidor aplicacion de express 
const app = express();

// Cors 
app.use( cors() );

//Lectura y parseo del body
app.use( express.json() );

//Rutas > middlewere de express 
app.use( '/api/auth', require('./routes/auth'));


app.listen( process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});

