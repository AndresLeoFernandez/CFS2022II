"use strict";
exports.__esModule = true;
var functions_1 = require("./Helpers/functions");
var GestorDeArchivos_1 = require("./Clases/GestorDeArchivos");
var GestorAutomotor_1 = require("./Clases/GestorAutomotor");
var ReadlineSync = require("readline-sync");
function imprimirMenuCargaAutosDeArchivo() {
    console.log("\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557");
    console.log("\u2551                            BIENVENIDO                           \u2551");
    console.log("\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563");
    console.log("\u2551 La Aplicacion cuenta con un archivo con datos de Automoviles.   \u2551");
    console.log("\u2551 Seleccione la opcion deseada de acuerdo a su preferencia.       \u2551");
    console.log("\u2551                                                                 \u2551");
    console.log("\u2551          1- Cargar Autos desde Archivo.                         \u2551");
    console.log("\u2551          2- Pasar al Menu Principal.                            \u2551");
    console.log("\u2551          0- Salir.                                              \u2551");
    console.log("\u2551                                                                 \u2551");
    console.log("\u2551                                                                 \u2551");
    console.log("\u2551                                                                 \u2551");
    console.log("\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D");
}
function imprimirMenuPrincipal() {
    console.log("\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557");
    console.log("\u2551                 MENU                    \u2551");
    console.log("\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563");
    console.log("\u2551 1- Cargar Automotor nuevo.              \u2551");
    console.log("\u2551 2- Eliminar Automotor.                  \u2551");
    console.log("\u2551 3- Consultar Automotor.                 \u2551");
    console.log("\u2551 4- Consultar Ficha Automotor.           \u2551");
    console.log("\u2551 5- Modificar Automotor.                 \u2551");
    console.log("\u2551 6- Mostrar Listado de Automoviles.      \u2551");
    console.log("\u2551 0- Salir.                               \u2551");
    console.log("\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D");
}
function solicitarOpcion(min, max) {
    var opcion = -1;
    while (!(opcion >= min && opcion <= max)) {
        opcion = ReadlineSync.questionInt("Ingrese el numero de opcion: ");
    }
    return opcion;
}
//Iniciar programa
var listaEjemplares = [];
var op = 1;
imprimirMenuCargaAutosDeArchivo();
op = solicitarOpcion(0, 2);
switch (op) {
    case 0:
        console.log("");
        console.log("");
        console.log("\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557");
        console.log("║        Gracias por utilizar la Aplicación.               ║");
        console.log("\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D");
        console.log("");
        console.log("");
        break;
    case 1:
        console.log("\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557");
        console.log("\u2551 Cargando los datos desde el archivo...                   \u2551");
        // Obtengo del archivo *.txt los libros 
        var datos = new GestorDeArchivos_1["default"]("listado-autos.txt");
        //Estos son los datos que hay en el archivo.
        console.log("\u2551                                                          \u2551");
        console.log("\u2551 Se cargaron ".concat(datos.getArregloString().length, " registro(s) desde el archivo... \u2551"));
        console.log("\u2551 Inicializando Automotores desde Archivo...               \u2551");
        console.log("\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D");
        for (var i = 0; i < datos.getArregloString().length; i++) {
            (0, functions_1["default"])(datos.getArregloString()[i], listaEjemplares);
        }
    default:
        var registroDeAutomoviles = new GestorAutomotor_1["default"](listaEjemplares);
        console.log("");
        console.log("");
        console.log("\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557");
        console.log("║   Registro de Automoviles creada...                      ║");
        console.log("║   Para verlos ingrese a la opcion 6 del menu principal.  ║");
        console.log("\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D");
        console.log("");
        console.log("");
        var opp = 1;
        while (op != 0) {
            imprimirMenuPrincipal();
            op = solicitarOpcion(0, 6);
            switch (op) {
                case 0:
                    console.log("Gracias por utilizar la Aplicación.");
                    break;
                case 1:
                    console.log("Bienvenido a la carga de un nuevo Automovil");
                    registroDeAutomoviles.cargarAutomotor();
                    break;
                case 2:
                    console.log("Eliminar un Automovil.");
                    var idEliminar = ReadlineSync.question("Ingrese el numero de Patente: ");
                    registroDeAutomoviles.eliminarAutomotor(idEliminar);
                    break;
                case 3:
                    console.log("Consultar Automovil.");
                    var idConsulta = ReadlineSync.question("Ingrese el numero de Patente: ");
                    registroDeAutomoviles.consultarAutomotor(idConsulta, true);
                    break;
                case 4:
                    console.log("Consultar Ficha Automovil .");
                    var idConsultaFicha = ReadlineSync.question("Ingrese el numero de Patente: ");
                    registroDeAutomoviles.consultarAutomotor(idConsultaFicha, false);
                    break;
                case 5:
                    console.log("Modificar Libro.");
                    var idModificar = ReadlineSync.question("Ingrese el numero de Patente: ");
                    registroDeAutomoviles.modificarAutomotor(idModificar);
                    break;
                case 6:
                    registroDeAutomoviles.mostrarColeccion();
                    break;
                default:
                    console.log("El dato ingresado no se corresponde con ninguna opcion");
                    break;
            }
        }
        break;
}
