//Importacion libreria
const orientDB = require('orientjs');


//Conexion con servidor y bd

const serv = orientDB({
    host: 'localhost',
    port: 2424,
    username: 'root',
    password: 'root',
    useToken: true,
});

const db = serv.use({
    name: 'MovieRatings',
    username: 'admin',
    password: 'admin'
});

module.exports = db;

