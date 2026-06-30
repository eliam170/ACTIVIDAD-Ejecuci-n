const express = require('express');
const pqrsRoutes = require('./routes/pqrs.routes');

const app = express();
const PORT = 3000;
const HOST = `0.0.0.0`

// Middleware para permitir que Express entienda formato JSON en el cuerpo de las peticiones (req.body)
app.use(express.json());

// Vincular las rutas con el prefijo /pqrs
app.use('/', pqrsRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/productos', productosRoutes);
// Iniciar el servidor escuchando en el puerto definido
app.listen(PORT, () => {
    console.log(`servidor backen local`)
    console.log(`Servidor backend corriendo con éxito en http://localhost:${PORT}`);
});