// exportar response para que acepte el tipado 
const { response } = require('express');
const Usuario = require('../models/Usuario')

const crearUsuario = async(req,res = response ) => {

    // crear el usuario 
    // console.log( req.body );
    const { email, name, password } = req.body;   //desestructurados

    try {
        //verificar que no existan correos iguales (verificar email)
        const usuario = await Usuario.findOne({ email })

        if ( usuario ) {
            return res.status(400).json({
                ok:false,
                msg:"El usuario con ese email ya existe"
            });
        }

        //Crear usuario con em modelo
        const dbUser = new Usuario( req.body );
        //Hashear la contraseña

        //Generar el JSON WEB token, autenticacion 

        // Crear uaurio de DB 
        await dbUser.save()

        //Generar respuesta exitosa
        return res.status(201).json({
            ok:true,
            uid:dbUser.id,
            name
        })

        
    } catch (error) {
        console.log( error )
        return res.status(500).json({
            ok:false,
            msg:'Por favor hable con el administrador'
        });
    
    }    


}

const loginUsuario = (req,res = response)=>{

    const { email, password } = req.body;   //desestructurados
    // console.log(email, password)
    
    return res.json({
        ok:true,
        msg:'Login de usuario /'
    });
}

const revalidarToken = (req,res=response)=>{
    
    return res.json({
        ok:true,
        msg:'Renew'
    });
}


// exportar los controladores creados
module.exports={
    crearUsuario,
    loginUsuario, 
    revalidarToken
}