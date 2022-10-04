"use strict";
exports.__esModule = true;
var GestorDeArchivos_1 = require("./Clases/GestorDeArchivos");
var GestorLibros_1 = require("./Clases/GestorLibros");
var functions_1 = require("./helpers/functions");
var ReadlineSync = require("readline-sync");
//Iniciar programa
/*
* Obtengo del archivo *.txt los libros
*/
console.log("Cargando los datos desde el archivo...");
var datos = new GestorDeArchivos_1["default"]("listado-libros.txt");
//Estos son los datos que hay en el archivo.
//datos.mostrarArreglo();
console.log("Se cargaron ".concat(datos.getArregloString().length, " registro(s) desde el archivo..."));
var listaEjemplares = [];
console.log("Inicializando Libros...");
for (var i = 0; i < datos.getArregloString().length; i++) {
    (0, functions_1["default"])(datos.getArregloString()[i], listaEjemplares);
}
var biblioteca = new GestorLibros_1["default"](listaEjemplares);
console.log("Biblioteca creada...");
function imprimirMenu() {
    console.log("\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557");
    console.log("\u2551                 MENU                    \u2551");
    console.log("\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563");
    console.log("\u2551 1- Cargar Libro Nuevo.                  \u2551");
    console.log("\u2551 2- Eliminar Libro.                      \u2551");
    console.log("\u2551 3- Consultar Libro.                     \u2551");
    console.log("\u2551 4- Modificar Libro.                     \u2551");
    console.log("\u2551 5- Mostrar toda la Biblioteca.          \u2551");
    console.log("\u2551 0- Salir.                               \u2551");
    console.log("\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D");
}
var opcion = 1;
while (opcion != 0) {
    imprimirMenu();
    opcion = ReadlineSync.questionInt("Ingrese el numero de opcion: ");
    switch (opcion) {
        case 0:
            console.log("Gracias por utilizar la Aplicacion.");
            break;
        case 1:
            console.log("Bienvenido a la carga de nuevo Libro");
            biblioteca.cargarLibro();
            break;
        case 2:
            console.log("Eliminar Libro.");
            var idEliminar = ReadlineSync.question("Ingrese el numero de Identificacion: ");
            biblioteca.eliminarLibro(idEliminar);
            break;
        case 3:
            console.log("Consultar Libro.");
            var idConsulta = ReadlineSync.question("Ingrese el numero de Identificacion: ");
            biblioteca.consultarLibro(idConsulta);
            break;
        case 4:
            console.log("Modificar Libro.");
            var idModificar = ReadlineSync.question("Ingrese el numero de Identificacion: ");
            biblioteca.modificarLibro(idModificar);
            break;
        case 5:
            biblioteca.mostrarColeccion();
            break;
        default:
            console.log("El dato ingresado no se corresponde con ninguna opcion");
            break;
    }
}
