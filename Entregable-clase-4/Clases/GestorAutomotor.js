"use strict";
exports.__esModule = true;
//import * as fs from 'fs';
var ReadlineSync = require("readline-sync");
var functions_1 = require("../Helpers/functions");
var Automotor_1 = require("./Automotor");
var Motor_1 = require("./Motor");
var GestorAutomotor = /** @class */ (function () {
    function GestorAutomotor(Automotores) {
        this.listaAutomotores = Automotores;
    }
    GestorAutomotor.prototype.getListaAutomotores = function () {
        return this.listaAutomotores;
    };
    /* Cargar Automotor
    * Ingresar un nuevo Automotor a la colección por teclado.
    */
    GestorAutomotor.prototype.cargarAutomotor = function () {
        var modelo = ReadlineSync.question("Ingrese el modelo del Automotor: ");
        var marca = ReadlineSync.question("Ingrese la marca del Automotor: ");
        var año = ReadlineSync.questionInt("Ingrese el año del Automotor: ");
        console.log("Los datos correspondientes al motor se generan automaticamente para no demorar la carga.");
        console.log("La patente se asigna de forma aleatoria.");
        console.log("Para ver los datos completos del automovil debe consultar la opcion 4- Consultar Ficha Automotor.");
        var motor = new Motor_1["default"]("mx", "marc-x", año, "mx-marc-x-" + año);
        var nuevoAutomotor = new Automotor_1["default"](modelo, marca, año, motor, (0, functions_1.generarPatente)());
        this.agregarAutomotor(nuevoAutomotor);
    };
    /* Eliminar Automotor
    *  Dada una identificación valida elimina el Automotor de la colección.
    */
    GestorAutomotor.prototype.eliminarAutomotor = function (identificacion) {
        var AutomotoresAux = [];
        var encontrado = false;
        for (var t = 0; t < this.listaAutomotores.length; t++) {
            var nuevoAutomotor = this.listaAutomotores[t];
            if (nuevoAutomotor.getPatente().toLowerCase() != identificacion.toLowerCase()) {
                AutomotoresAux.push(nuevoAutomotor);
            }
            else {
                encontrado = true;
            }
        }
        if (encontrado) {
            this.listaAutomotores = AutomotoresAux;
            console.log("La identificación fue eliminada.");
        }
    };
    /* Insertar
    * Dado un Automotor lo agrega a la colección de Automotores.
    */
    GestorAutomotor.prototype.agregarAutomotor = function (ejemplar) {
        this.listaAutomotores.push(ejemplar);
    };
    /* consultar
    * Dada un numero de identificación válido devuelve por pantalla el Automotor que poseea
    * esa identificación entre la lista de Automotores de la colección.
    */
    GestorAutomotor.prototype.consultarAutomotor = function (identificacion, enTabla) {
        var encontrado = false;
        for (var t = 0; t < this.listaAutomotores.length; t++) {
            var nuevoAutomotor = this.listaAutomotores[t];
            if (nuevoAutomotor.getPatente().toLowerCase() == identificacion.toLowerCase()) {
                t = this.listaAutomotores.length;
                if (enTabla) {
                    this.mostrarAutomotor(nuevoAutomotor, true, true);
                }
                else {
                    this.mostrarFichaAutomotor(nuevoAutomotor);
                }
                encontrado = true;
            }
        }
        if (encontrado == false) {
            console.log("La identificación no existe.");
        }
    };
    /* Modificar Automotor
    * Dada un numero de identificacion válido lo detecta y realiza las consultas
    * para hacer las modificaciones pertinentes al Automotor.
    */
    GestorAutomotor.prototype.modificarAutomotor = function (identificacion) {
        for (var t = 0; t < this.listaAutomotores.length; t++) {
            var nuevoAutomotor = this.listaAutomotores[t];
            if (nuevoAutomotor.getPatente().toLowerCase() == identificacion.toLowerCase()) {
                console.log("Actualmente el modelo es ".concat(nuevoAutomotor.getModelo()));
                var modelo = ReadlineSync.question("Ingrese el nuevo modelo para el Automotor:");
                nuevoAutomotor.setModelo(modelo);
                console.log("Actualmente el a\u00F1o del Automotor es: ".concat(nuevoAutomotor.getAño()));
                var año = ReadlineSync.questionInt("Ingrese el nuevo año de fabricación del Automotor:");
                nuevoAutomotor.setAño(año);
                console.log("El Automotor fue modificado.");
                t = this.listaAutomotores.length;
            }
        }
    };
    /* Mostrar Automotor
    * Dado ejemplar: Automotor lo imprime en patalla en formato de tabla.
    *  si primero es true imprime la cabecera de la tabla.
    *  si ultimo es true cierra el formato de la tabla sino deja abierta.
    */
    GestorAutomotor.prototype.mostrarAutomotor = function (ejemplar, primero, ultimo) {
        if (primero) {
            console.log("\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557");
            console.log("\u2551Patente \u2551           Modelo                     \u2551             Marca                    \u2551       A\u00F1o de Fabricaci\u00F3n           \u2551");
        }
        console.log("\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256C\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256C\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256C\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563");
        var valor = "║ ";
        valor += ejemplar.getPatente();
        while (valor.length < 9) {
            valor += " ";
        }
        valor += "║ ";
        valor += ejemplar.getModelo();
        while (valor.length < 48) {
            valor += " ";
        }
        valor += "║ ";
        valor += ejemplar.getMarca();
        while (valor.length < 87) {
            valor += " ";
        }
        valor += "║ ";
        valor += ejemplar.getAño();
        while (valor.length < 124) {
            valor += " ";
        }
        valor += "║";
        console.log(valor);
        if (ultimo) {
            console.log("\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2569\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2569\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2569\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D");
        }
    };
    GestorAutomotor.prototype.mostrarFichaAutomotor = function (ejemplar) {
        var linea;
        console.log("\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557");
        linea = ejemplar.getPatente();
        while (linea.length < 38) {
            linea += " ";
        }
        console.log("\u2551 Patente             \u2551 ".concat(linea, "\u2551"));
        console.log("\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256C\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563");
        linea = ejemplar.getModelo();
        while (linea.length < 38) {
            linea += " ";
        }
        console.log("\u2551 Modelo              \u2551 ".concat(linea, "\u2551"));
        console.log("\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256C\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563");
        linea = ejemplar.getMarca();
        while (linea.length < 38) {
            linea += " ";
        }
        console.log("\u2551 Marca               \u2551 ".concat(linea, "\u2551"));
        console.log("\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256C\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563");
        linea = ejemplar.getAño().toString();
        while (linea.length < 38) {
            linea += " ";
        }
        console.log("\u2551 A\u00F1o de Fabricaci\u00F3n  \u2551 ".concat(linea, "\u2551"));
        console.log("\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2569\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563");
        console.log("\u2551                     DATOS MOTOR                             \u2551");
        console.log("\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563");
        linea = ejemplar.getMotor().getModelo();
        while (linea.length < 38) {
            linea += " ";
        }
        console.log("\u2551 Modelo              \u2551 ".concat(linea, "\u2551"));
        console.log("\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256C\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563");
        linea = ejemplar.getMotor().getMarca();
        while (linea.length < 38) {
            linea += " ";
        }
        console.log("\u2551 Marca               \u2551 ".concat(linea, "\u2551"));
        console.log("\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256C\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563");
        linea = ejemplar.getMotor().getAño().toString();
        while (linea.length < 38) {
            linea += " ";
        }
        console.log("\u2551 A\u00F1o de Fabricaci\u00F3n  \u2551 ".concat(linea, "\u2551"));
        console.log("\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256C\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563");
        linea = ejemplar.getMotor().getCodigo();
        while (linea.length < 38) {
            linea += " ";
        }
        console.log("\u2551 Codigo              \u2551 ".concat(linea, "\u2551"));
        console.log("\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2569\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D");
    };
    /* Mostrar Colección
    *  Muestra en formato de tabla toda la colección disponible al momento.
    */
    GestorAutomotor.prototype.mostrarColeccion = function () {
        if (this.listaAutomotores.length > 0) {
            for (var t = 0; t < this.listaAutomotores.length; t++) {
                var nuevoAutomotor = this.listaAutomotores[t];
                if (t == 0) {
                    this.mostrarAutomotor(nuevoAutomotor, true, false);
                }
                else if (t == (this.listaAutomotores.length - 1)) {
                    this.mostrarAutomotor(nuevoAutomotor, false, true);
                }
                else {
                    this.mostrarAutomotor(nuevoAutomotor, false, false);
                }
            }
        }
        else {
            console.log("");
            console.log("");
            console.log("\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557");
            console.log("║   No existen Automoviles registrados por el momento.     ║");
            console.log("║   Cargue uno ingresando a la opcion 1 del menu.          ║");
            console.log("\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D");
            console.log("");
            console.log("");
        }
    };
    return GestorAutomotor;
}());
exports["default"] = GestorAutomotor;
