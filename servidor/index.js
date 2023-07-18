//Importacion libreria
const orientDB = require('orientjs');


//Conexion con servidor y bd

const serv = orientDB({
    host: 'localhost',
    port: 2480,
    username: 'root',
    password: 'root',
})

const db = serv.use({
    name: 'movieRatings',
    username: 'root',
    password: 'root'
})
console.log(db)

if (db){
    console.log("Conexion realizada con " + db.name)
}


//Se cierra conexion

serv.close();

