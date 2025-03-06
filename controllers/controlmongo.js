// Using Node.js `require()`
const mongoose = require('mongoose');

// Definimos el esquema del documento
const perroSchema = new mongoose.Schema({
    raza: String,
    edad: Number
});

// Creamos el modelo
const Perro = mongoose.model('Perro', perroSchema, 'perros');

const buscaPrimero = () => {
    // Buscamos el primer registro
    return Perro.findOne()
        .then(perro => {
            if (perro) {
                console.log('Primer perro encontrado', perro);
            } else {
                console.log('No se encontró ningún registro');
            }
        })
        .catch(err => console.error('Error al obtener el perro', err));
}