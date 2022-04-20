// exportar response para que acepte el tipado 
const { response } = require('express');

const crearUsuario = (req,res = response ) => {

    // crear el usuario 
    // console.log( req.body );
    const { email, name, password } = req.body;   //desestructurados
    console.log(email,name,password)
    
    return res.json({
        ok:true,
        msg:'Crear usuario /new'
    });
}

const loginUsuario = (req,res = response)=>{

    const { email, password } = req.body;   //desestructurados
    console.log(email, password)
    
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