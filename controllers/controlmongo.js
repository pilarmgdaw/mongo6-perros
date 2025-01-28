const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://andujarbosco:AU38yGaxOohnqopw@cluster0.yaak6.mongodb.net/almacen')
  .then(() => console.log('Connected!'));

//definimos el esquema del documento
const ordenadorSchema = new mongoose.Schema({
    marca:String,
    precio:Number
});

const Ordenador = mongoose.model('Ordenadore',ordenadorSchema, 'ordenadores');

const buscaPrimero = ()=>{
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
}


module.exports = { buscaPrimero };

