// Simulación de una base de datos en memoria
let pqrsDatabase = [
    { id: 1, tipo: "Queja", descripcion: "Mal servicio en la atención virtual", estado: "Pendiente" },
    { id: 2, tipo: "Sugerencia", descripcion: "Agregar más opciones de pago", estado: "En proceso" }
];

class PqrsModel {
    // Obtener todos los registros
    static getAll() {
        return pqrsDatabase;
    }

    // Obtener un registro por ID
    static getById(id) {
        return pqrsDatabase.find(item => item.id === parseInt(id));
    }

    // Crear un nuevo registro
    static create(data) {
        const newPqrs = {
            id: pqrsDatabase.length > 0 ? pqrsDatabase[pqrsDatabase.length - 1].id + 1 : 1,
            tipo: data.tipo,
            descripcion: data.descripcion,
            estado: "Pendiente" // Estado inicial por defecto
        };
        pqrsDatabase.push(newPqrs);
        return newPqrs;
    }

    // Actualizar un registro existente
    static update(id, data) {
        const index = pqrsDatabase.findIndex(item => item.id === parseInt(id));
        if (index !== -1) {
            pqrsDatabase[index] = { ...pqrsDatabase[index], ...data };
            return pqrsDatabase[index];
        }
        return null;
    }

    // Eliminar un registro
    static delete(id) {
        const index = pqrsDatabase.findIndex(item => item.id === parseInt(id));
        if (index !== -1) {
            const deletedItem = pqrsDatabase.splice(index, 1);
            return deletedItem[0];
        }
        return null;
    }
}

module.exports = PqrsModel;