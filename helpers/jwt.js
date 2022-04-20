const jwt = require('jsonwebtoken')

const generarJWT = ( uid, name ) =>{

    const payload = { uid, name }

    return new Promise( (resolve, reject ) =>{
        
        jwt.sign( payload, process.env.SECRET_JWT_SEED, {
            expiresIn:'24h'        //duracion del token 24 horas
        }, (error, token) =>{

            if(error){
                //Todo mal
                console.log(error)
                reject(error)
            }
            else{
                //Todo bien
                resolve( token )
            }    
        })
    })
}


module.exports = {
    generarJWT
}