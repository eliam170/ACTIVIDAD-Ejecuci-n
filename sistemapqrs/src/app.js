const express = require('express');
const pqrsRoutes = require('./routes/pqrs.routes');

const app = express();
const PORT = 3000;
const HOST = '0.0.0.0'; 

// Middleware para procesar JSON en el cuerpo de las peticiones
app.use(express.json());

// Conectar las rutas de PQRS directamente a la raíz
app.use('/', pqrsRoutes);

// Iniciar servidor en la red local
app.listen(PORT, HOST, () => {
    console.log(`Servidor backend corriendo con éxito en la red local.`);
    console.log(`Accesible en: http://localhost:${PORT}/`);
});