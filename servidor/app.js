const express = require('express');
const db = require('./index'); // Importa la configuración de la conexión con OrientDB
const app = express();

// Middleware para manejar datos JSON
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
    const query = `SELECT FROM Users WHERE username = '${username}' AND password = '${password}'`;
    const user = await db.query(query);

    if (user.length === 1) {
      // El inicio de sesión fue exitoso
      res.json({ success: true, message: 'Inicio de sesión exitoso' });
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
    const query = `SELECT expand(both('Viewed')) FROM Users WHERE userId = '${userId}'`;
    const movies = await db.query(query);

    res.json(movies);
  } catch (error) {
    console.error('Error al obtener las películas vistas por el usuario:', error);
    res.status(500).json({ error: 'Error al obtener las películas vistas por el usuario' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
