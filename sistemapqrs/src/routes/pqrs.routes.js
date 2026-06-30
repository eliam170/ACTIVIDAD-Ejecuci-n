const express = require('express');
const router = express.Router();
const PqrsController = require('../controllers/pqrs.controller');

// Definición de Rutas asignadas a los métodos del Controlador
router.get('/', PqrsController.getAllPqrs);
router.get('/:id', PqrsController.getPqrsById);
router.post('/', PqrsController.createPqrs);
router.put('/:id', PqrsController.updatePqrs);
router.delete('/:id', PqrsController.deletePqrs);

module.exports = router;