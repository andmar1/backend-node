const { response } = require("express");  //solo para tipado
const { validationResult } = require("express-validator");

const validarCampos = ( req, res = response, next ) =>{
 
    const errors = validationResult( req );

    if (!errors.isEmpty()) {            //validar si el error no esta vacio
        return res.status(400).json({   //retornar error 400
            ok:false,                   //mal respuesta
            errors:errors.mapped()         //mostrar los errores encontrados
        });       
    }

    next();  //si no hay errores se ejecuta el next para poder enviar la peticion
} 

// exportar 
module.exports = {
    validarCampos
}