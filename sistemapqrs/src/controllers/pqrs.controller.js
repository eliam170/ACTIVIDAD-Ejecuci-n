const PqrsModel = require('../models/pqrs.model');

class PqrsController {
    
    // GET /pqrs
    static getAllPqrs(req, res) {
        try {
            const data = PqrsModel.getAll();
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({ message: "Error interno del servidor" });
        }
    }

    // GET /pqrs/:id
    static getPqrsById(req, res) {
        try {
            const { id } = req.params;
            const item = PqrsModel.getById(id);
            if (!item) {
                return res.status(404).json({ message: `PQRS con ID ${id} no encontrada` });
            }
            return res.status(200).json(item);
        } catch (error) {
            return res.status(500).json({ message: "Error interno del servidor" });
        }
    }

    // POST /pqrs
    static createPqrs(req, res) {
        try {
            const { tipo, descripcion } = req.body;
            if (!tipo || !descripcion) {
                return res.status(400).json({ message: "El tipo y la descripción son obligatorios" });
            }
            const newPqrs = PqrsModel.create({ tipo, descripcion });
            return res.status(201).json(newPqrs);
        } catch (error) {
            return res.status(500).json({ message: "Error interno del servidor" });
        }
    }

    // PUT /pqrs/:id
    static updatePqrs(req, res) {
        try {
            const { id } = req.params;
            const updatedItem = PqrsModel.update(id, req.body);
            if (!updatedItem) {
                return res.status(404).json({ message: `No se pudo actualizar. PQRS con ID ${id} no encontrada` });
            }
            return res.status(200).json({ message: "PQRS actualizada con éxito", data: updatedItem });
        } catch (error) {
            return res.status(500).json({ message: "Error interno del servidor" });
        }
    }

    // DELETE /pqrs/:id
    static deletePqrs(req, res) {
        try {
            const { id } = req.params;
            const deletedItem = PqrsModel.delete(id);
            if (!deletedItem) {
                return res.status(404).json({ message: `No se pudo eliminar. PQRS con ID ${id} no encontrada` });
            }
            return res.status(200).json({ message: `PQRS con ID ${id} eliminada correctamente` });
        } catch (error) {
            return res.status(500).json({ message: "Error interno del servidor" });
        }
    }
}

module.exports = PqrsController;