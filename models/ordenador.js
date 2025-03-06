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

const buscaTodos = () => {
    // Buscamos todos los registros
    return Perro.find()
        .then(perros => {
            if (perros.length > 0) {
                /*console.log('Perros encontrados', perros);*/
                return perros;
            } else {
                console.log('No se encontró ningún registro');
                return null;
            }
        })
        .catch(err => {
            console.error('Error al obtener los perros', err);
            throw err;
        });
}

const buscaPorId = (id) => {
    // Buscamos el primer registro
    return Perro.findById(id)
        .then(perro => {
            if (perro) {
                //console.log('Primer perro encontrado', perro);
                return perro;
            } else {
                console.log('No se encontró ningún registro con el id' + id);
                return null;
            }
        })
        .catch(err => {
            console.error('Error al obtener el perro' + id, err);
            throw err;
        });
}

//***************************** */
// Busca por edad mayor a 3
/****************************** */
const buscaEdadMayor = (edadMinima) => {
    // Buscamos todos los registros
    Perro.find({ edad: { $gt: edadMinima } })
        .then(perros => {
            if (perros.length > 0) {
                console.log('Perros encontrados con edad mayor a ' + edadMinima, perros);
            } else {
                console.log('No se encontró ningún registro');
            }
        })
        .catch(err => console.error('Error al obtener los perros', err));
}

const creaNuevoPerro = (r, e) => {
    const nuevoPerro = new Perro({
        raza: r,
        edad: e
    });

    // Guardar el perro en la base de datos
    return nuevoPerro.save()
        .then(perro => {
            console.log('Perro guardado:', perro);
            return perro;
        })
        .catch(err => {
            console.error('Error al guardar el perro:', err);
            throw err;
        });
}

const creaNuevoPerroGeneral = (perro) => {
    const nuevoPerro = new Perro({
        raza: perro.raza,
        edad: perro.edad
    });

    // Guardar el perro en la base de datos
    return nuevoPerro.save()
        .then(perro => {
            console.log('Perro guardado:', perro);
            return perro;
        })
        .catch(err => {
            console.error('Error al guardar el perro:', err);
            throw err;
        });
}

const actualizaEdad = (idPerro, nuevaEdad) => {
    Perro.findByIdAndUpdate(idPerro, { edad: nuevaEdad }, { new: true })
        .then(perroActualizado => {
            if (perroActualizado) {
                console.log('Perro actualizado:', perroActualizado);
            } else {
                console.log('No se encontró ningún perro con ese ID.');
            }
        })
        .catch(err => console.error('Error al actualizar el perro:', err));
}

const actualizaPerro = (idPerro, perroActualizar) => {
    return Perro.findByIdAndUpdate(idPerro, perroActualizar, { new: true })
        .then(perroActualizado => {
            if (perroActualizado) {
                console.log('Perro actualizado:', perroActualizado);
                return perroActualizado;
            } else {
                console.log('No se encontró ningún perro con ese ID.');
                return null;
            }
        })
        .catch(err => console.error('Error al actualizar el perro:', err));
}

const borraPerro = (idPerroParaBorrar) => {
    return Perro.findByIdAndDelete(idPerroParaBorrar)
        .then(perroEliminado => {
            if (perroEliminado) {
                console.log('Perro eliminado:', perroEliminado);
                return perroEliminado;
            } else {
                console.log('No se encontró ningún perro con ese ID.');
                return null;
            }
        })
        .catch(err => {
            console.error('Error al eliminar el perro:', err);
            throw err;
        });
}

module.exports = {
    actualizaPerro,
    buscaPrimero,
    buscaTodos,
    buscaPorId,
    buscaEdadMayor,
    actualizaEdad,
    borraPerro,
    creaNuevoPerro,
    Perro
}