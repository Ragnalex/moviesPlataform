const express = require('express');
const cors = require('cors');
const db = require('./index'); // Importa la configuración de la conexión con OrientDB
const app = express();

// Middleware para manejar datos JSON
app.use(cors());
app.use(express.json());

// Endpoint de prueba
app.get('/', (req, res) => {
  res.send('¡Bienvenido a la API!');
});

// Endpoint para el inicio de sesión
app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    // Realiza una consulta para verificar el nombre de usuario y contraseña
    const query = `SELECT FROM Users WHERE name = '${username}' AND pass = '${password}'`;
    const user = await db.query(query);

    if (user.length === 1) {
      // El inicio de sesión fue exitoso
      res.status(200).send({ success: true, message: 'Inicio de sesión exitoso', data: user });
    } else {
      // El inicio de sesión falló (credenciales inválidas)
      res.status(401).json({ success: false, message: 'Credenciales inválidas' });
    }
  } catch (error) {
    console.error('Error al realizar el inicio de sesión:', error);
    res.status(500).json({ error: 'Error al realizar el inicio de sesión' });
  }
});

// Endpoint para obtener el catálogo de películas vistas por un usuario
app.get('/api/users/:userId/movies', async (req, res) => {
  const { userId } = req.params;

  try {
    // Realiza una consulta para obtener las películas vistas por el usuario
    const query = `SELECT expand(both('rated')) FROM Users WHERE id = '${userId}' ORDER BY rate DESC`;
    const movies = await db.query(query);

    res.status(200).send({data: movies});
  } catch (error) {
    console.error('Error al obtener las películas vistas por el usuario:', error);
    res.status(500).send({ error: 'Error al obtener las películas vistas por el usuario' });
  }
});

app.get('/api/genre/:title', async (req, res) => {
  const { title } = req.params;
  try {
    const genres = await db.query(`SELECT title AS pelicula, list(description) AS generos 
                                  FROM ( TRAVERSE out("hasGenera") FROM (SELECT FROM movies WHERE title = "${title}") ) 
                                  WHERE @class = 'Genres'`);
    if (genres) {
      res.status(200).send({data: genres})
    }
    else res.status(500).send({error: "No encontrado"});
  } catch (error) {
    console.log(error);
    res.status(500).send({error: "Error"});
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
