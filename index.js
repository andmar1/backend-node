const express = require('express');

// Crear el servidor aplicacion de express 

const app = express();

//GET 
app.get('/',( req, res )=>{

    res.json({
        ok:true,
        msg:'Todo salio bien',
        uid:1244
    })

})

app.listen( 4000, ()=>{
    console.log(`Servidor corriendo en puerto ${4000}`)
});