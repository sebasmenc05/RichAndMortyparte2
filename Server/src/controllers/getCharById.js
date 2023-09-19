//const axios = require('axios');

const { default: axios } = require("axios");

/* const getCharById = (res, id)=>{
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data})=>{
        const {id, name, gender, species, origin: {name:origin}, image, status} = data

        let character = {
            id,
            name,
            gender,
            species,
            origin,
            image,
            status
        }

        res.writeHead(200, {"content-type": "application/json"})
        res.end(JSON.stringify(character))
    })
    .catch((error)=>{
        res.writeHead(500, {"content-type": "text/plain"})
        res.end(error.mesagge)
    })} */
//EL CODIGO DE ARRIBA CORRESPONDE A WEB SERVER, CLASE DE PROMESAS.


//ACA COMENZAMOS CON EXPRESS y despues agregamos async await reeplazo promesas por el async y uso try catch

const url = 'https://rickandmortyapi.com/api/character/'

const getCharById = async (req, res) =>{
    const {id} = req.params;
    try {
        const data = await axios(`url${id}`)
        if(data){
            const {id, name, gender, species, origin: {name:origin}, image, status} = data
            const character ={
                id,
                name,
                gender,
                species,
                origin,
                image,
                status
            }
        }else {
            res.status(404).json({messege : 'Not Found'})
        }

    } catch (error) {
        res.status(500).json({message: error})
    }
}




module.export = getCharById;