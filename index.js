const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
const { response } = require('express');
const path = require ('path')   //ruteo

require('dotenv').config(); //para agregar variables de entorno

// console.log( process.env )  ver puerto configurado

// Crear el servidor aplicacion de express 
const app = express();

//connexion a la base de datos
dbConnection();

//Directorio publico
app.use(express.static('public'))    //directorio de carpeta public

// Cors 
app.use( cors() );

//Lectura y parseo del body
app.use( express.json() );

//Rutas > middlewere de express 
app.use( '/api/auth', require('./routes/auth'));


// Manejar todas las demas rutas, para problema al cargar dashboard
app.get('*', ( req, res = response )=>{
    res.sendFile( path.resolve( __dirname, 'public/index.html') ); //cargar proyecto de angular
})


app.listen( process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
});

