const express = require('express');
const app = express();
const port = 3000; // Puedes usar cualquier puerto que desees

// Middleware para parsear JSON
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Rutas adicionales (opcional)
app.get('/about', (req, res) => {
  res.send('Carlos Chupapi');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log("Server running at http://localhost:" + port);
});