const express = require("express");
const app = express();
const port = 3002;

// Middleware para parsear el cuerpo de las solicitudes en formato JSON
app.use(express.json());
app.use(express.static('public'));
const modeloOrdenador = require('./models/ordenador');
// Datos de ejemplo (simulando una base de datos)
let items = [
  { id: 1, name: "Ordenador 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];


// Obtener todos los ítems
app.get("/items", (req, res) => {
  modeloOrdenador.buscaTodos()
  .then(
    ordenadores=>res.status(200).json(ordenadores)
  )
  .catch(err=>res.status(500).send("error"))
});


// Obtener un ítem por ID
app.get("/items/:id", (req, res) => {
  const itemId = req.params.id;
  modeloOrdenador.buscaPorId(itemId)
  .then(
    ordenador=>res.status(200).json(ordenador)
  )
  .catch(err=>res.status(500).send("error"))
});


// Crear un nuevo ítem
app.post("/items", (req, res) => {
    marca= req.body.marca;
    precio= req.body.precio;
    modeloOrdenador.creaNuevoOrdenador(marca,precio)
    .then(
      ordenador=>res.status(200).json(ordenador)
    )
    .catch(err=>res.status(500).send("error"))

});


// Actualizar un ítem existente
app.put("/items/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const itemIndex = items.findIndex((i) => i.id === itemId);
  if (itemIndex !== -1) {
    items[itemIndex].name = req.body.name;
    res.json(items[itemIndex]);
  } else {
    res.status(404).json({ message: "Ítem no encontrado" });
  }
});


// Eliminar un ítem
app.delete("/items/:id", (req, res) => {
  const itemId = req.params.id;
  modeloOrdenador.borraOrdenador(itemId)
  .then(
    ordenador=>res.status(200).json(ordenador)
  )
  .catch(err=>res.status(500).send("error"))

});


// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
