// exportar response para que acepte el tipado 
const { response } = require('express');

const crearUsuario = (req,res = response ) => {
    
    return res.json({
        ok:true,
        msg:'Crear usuario /new'
    });
}

const loginUsuario = (req,res = response)=>{
    
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