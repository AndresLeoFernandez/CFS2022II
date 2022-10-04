"use strict";
exports.__esModule = true;
var Libro_1 = require("../Clases/Libro");
function crearLibro(libroTexto, arrayLibros) {
    var propiedadesLibro = libroTexto.split(',');
    var titulo = propiedadesLibro[0];
    var autor = propiedadesLibro[1];
    var editorial = propiedadesLibro[2];
    var codigo = propiedadesLibro[3];
    var nuevoLibro = new Libro_1["default"](titulo, autor, editorial, codigo);
    arrayLibros.push(nuevoLibro);
}
exports["default"] = crearLibro;
