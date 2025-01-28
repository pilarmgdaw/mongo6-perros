// Using Node.js `require()`
/* const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://andujarbosco:AU38yGaxOohnqopw@cluster0.yaak6.mongodb.net/almacen')
  .then(() => console.log('Connected!'));

//definimos el esquema del documento
const ordenadorSchema = new mongoose.Schema({
    marca:String,
    precio:Number
});

const Ordenador = mongoose.model('Ordenadore',ordenadorSchema, 'ordenadores'); */

const controlmongo = require('./controllers/controlmongo');
//creamos el modelo
/* const buscaPrimero = ()=>{
  //buscamos el primer registro
Ordenador.findOne()
  .then( ordenador=>{
    if (ordenador) {
      console.log('Primer ordenador encontrado',ordenador)
    } else {
      console.log('No se encontró ningún registro')
    }
  })
  .catch(err=>console.error('Error al obtener el ordenador',err));
}*/

const buscaTodos = ()=>{
  //buscamos todos los registros
Ordenador.find()
  .then( ordenadores=>{
    if (ordenadores.length>0) {
      console.log('Ordenadores encontrados',ordenadores)
    } else {
      console.log('No se encontró ningún registro')
    }
  })
  .catch(err=>console.error('Error al obtener los ordenadores',err));
}

const buscaPorId = (id)=>{
  //buscamos el primer registro
Ordenador.findById(id)
  .then( ordenador=>{
    if (ordenador) {
      console.log('Primer ordenador encontrado',ordenador)
    } else {
      console.log('No se encontró ningún registro con el id'+ id)
    }
  })
  .catch(err=>console.error('Error al obtener el ordenador',err));
}
const idBuscado = '67968e4b8d9c5968463e2b43';

//***************************** */
// busca por precio mayor a 3000
/****************************** */
const buscaPrecioMayor = ()=>{
  //buscamos todos los registros
Ordenador.find({precio: { $gt:1000}})
  .then( ordenadores=>{
    if (ordenadores.length>0) {
      console.log('Ordenadores encontrados con precio mayor a 1000',ordenadores)
    } else {
      console.log('No se encontró ningún registro')
    }
  })
  .catch(err=>console.error('Error al obtener los ordenadores',err));
}

controlmongo.buscaPrimero();