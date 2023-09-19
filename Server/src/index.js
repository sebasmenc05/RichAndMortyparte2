//const http = require('http');
//const getCharById = require("./controllers/getCharById")
//const PORT = 3001;

//http.createServer((req, res)=>{
    //const {url} = req;
    //res.setHeader('Access-Control-Allow-Origin', '*');
   /*  todo esto corresponde al modulo web server-- en promesas cambiamos esto!!
   if(url.includes(`rickandmorty/character`)){
        //divido la ruta con el split, tomando la barra como separador. con el at(-1) elijo la ultima posicion
        let id = url.split('/').at(-1);
        //con el metodo find busco el id del character que sea igual al id que obtengo de la ruta.
        let character = characters.find(char => char.id === Number(id))

        //la respuesta del servidor es siempre res.writeHead y el tipo de dato puede ser texto html o en este caso json.
        res.writeHead(200, {"Content-Type": "application/json"})
        res.end(JSON.stringify(character))
    } 
    ya no necesito data, ahora conectamos el servidor a la api para crear un puente entre el front y la api*/
    //if(url.includes(`rickandmorty/character`)){
        //let id = url.split('/').at(-1);
        //getCharById(res, id);   
    //}}).listen(PORT, 'localhost')

// hasta aca todo el codigo lo haciamos con web server.


//! aca comienza express
// express

const express = require('express')
const server = express()
const PORTO = 3001
const morgan = require('morgan');
const router = require('./routes/index');

//traigo del readme, funcion para middleware, sirve para hacer una lectura de las rutas y de los accesos
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

server.use(express.json())
/*esta linea es para poder leer archivos json */

server.use('/rickandmorty', router)

server.listen(PORTO, ()=>{
    console.log(`Server raised in port: ${PORTO}`)
})
