"use strict";
exports.__esModule = true;
//import * as fs from 'fs';
var ReadlineSync = require("readline-sync");
var Libro_1 = require("./Libro");
var GestorLibros = /** @class */ (function () {
    function GestorLibros(libros) {
        this.listaLibros = libros;
    }
    GestorLibros.prototype.getListaLibros = function () {
        return this.listaLibros;
    };
    /* Cargar Libro
    * Ingresar un nuevo libro a la colección por teclado.
    */
    GestorLibros.prototype.cargarLibro = function () {
        var titulo = ReadlineSync.question("Ingrese el titulo del libro: ");
        var autor = ReadlineSync.question("Ingrese el autor del libro: ");
        var editorial = ReadlineSync.question("Ingrese la editorial del libro: ");
        var codigo = ReadlineSync.question("Ingrese el codigo de barra del libro: ");
        var nuevoLibro = new Libro_1["default"](titulo, autor, editorial, codigo);
        this.agregarLibro(nuevoLibro);
    };
    /* Eliminar Libro
    *  Dada una identificación valida elimina el libro de la colección.
    */
    GestorLibros.prototype.eliminarLibro = function (identificacion) {
        var librosAux = [];
        var encontrado = false;
        for (var t = 0; t < this.listaLibros.length; t++) {
            var nuevoLibro = this.listaLibros[t];
            if (nuevoLibro.getCodigoBarra() != identificacion) {
                librosAux.push(nuevoLibro);
            }
            else {
                encontrado = true;
            }
        }
        if (encontrado) {
            this.listaLibros = librosAux;
            console.log("La identificación fue eliminada.");
        }
    };
    /* Insertar
    * Dado un libro lo agrega a la colección de libros.
    */
    GestorLibros.prototype.agregarLibro = function (ejemplar) {
        this.listaLibros.push(ejemplar);
    };
    /* consultar
    * Dada un numero de identificación válido devuelve por pantalla el libro que poseea
    * esa identificación entre la lista de libros de la colección.
    */
    GestorLibros.prototype.consultarLibro = function (identificacion) {
        var encontrado = false;
        for (var t = 0; t < this.listaLibros.length; t++) {
            var nuevoLibro = this.listaLibros[t];
            if (nuevoLibro.getCodigoBarra() == identificacion) {
                t = this.listaLibros.length;
                this.mostrarLibro(nuevoLibro, true, true);
                encontrado = true;
            }
        }
        if (encontrado == false) {
            console.log("La identificación no existe.");
        }
    };
    /* Modificar Libro
    * Dada un numero de identificacion válido lo detecta y realiza las consultas
    * para hacer las modificaciones pertinentes al libro.
    */
    GestorLibros.prototype.modificarLibro = function (identificacion) {
        for (var t = 0; t < this.listaLibros.length; t++) {
            var nuevoLibro = this.listaLibros[t];
            if (nuevoLibro.getCodigoBarra() == identificacion) {
                console.log("Actualmente el titulo es ".concat(nuevoLibro.getTitulo()));
                var titulo = ReadlineSync.question("Ingrese el nuevo titulo para el libro:");
                nuevoLibro.setTitulo(titulo);
                console.log("Actualmente el autor del libro es: ".concat(nuevoLibro.getAutor()));
                var autor = ReadlineSync.question("Ingrese el nuevo nombre de autor del libro:");
                nuevoLibro.setAutor(autor);
                console.log("Actualmente la editorial del libro es: ".concat(nuevoLibro.getEditorial()));
                var editorial = ReadlineSync.question("Ingrese la nueva Editorial del libro:");
                nuevoLibro.setEditorial(editorial);
                console.log("Actualmente el Codigo de Barra del libro es: ".concat(nuevoLibro.getCodigoBarra()));
                var codigo = ReadlineSync.question("Ingrese el nuevo Codigo de Barra del libro:");
                nuevoLibro.setCodigoBarra(codigo);
                console.log("El libro fue modificado.");
                t = this.listaLibros.length;
            }
        }
    };
    /* Mostrar Libro
    * Dado ejemplar: libro lo imprime en patalla en formato de tabla.
    *  si primero es true imprime la cabecera de la tabla.
    *  si ultimo es true cierra el formato de la tabla sino deja abierta.
    */
    GestorLibros.prototype.mostrarLibro = function (ejemplar, primero, ultimo) {
        if (primero) {
            console.log("\u2554\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2566\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2557");
            console.log("\u2551 Codigo \u2551           Titulo                     \u2551             Autor                    \u2551       Editorial                    \u2551");
        }
        console.log("\u2560\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256C\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256C\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u256C\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2563");
        var valor = "║ ";
        valor += ejemplar.getCodigoBarra();
        while (valor.length < 9) {
            valor += " ";
        }
        valor += "║ ";
        valor += ejemplar.getTitulo();
        while (valor.length < 48) {
            valor += " ";
        }
        valor += "║ ";
        valor += ejemplar.getAutor();
        while (valor.length < 87) {
            valor += " ";
        }
        valor += "║ ";
        valor += ejemplar.getEditorial();
        while (valor.length < 124) {
            valor += " ";
        }
        valor += "║";
        console.log(valor);
        if (ultimo) {
            console.log("\u255A\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2569\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2569\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2569\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u255D");
        }
    };
    /* Mostrar Colección
    *  Muestra en formato de tabla toda la colección disponible al momento.
    */
    GestorLibros.prototype.mostrarColeccion = function () {
        for (var t = 0; t < this.listaLibros.length; t++) {
            var nuevoLibro = this.listaLibros[t];
            if (t == 0) {
                this.mostrarLibro(nuevoLibro, true, false);
            }
            else if (t == (this.listaLibros.length - 1)) {
                this.mostrarLibro(nuevoLibro, false, true);
            }
            else {
                this.mostrarLibro(nuevoLibro, false, false);
            }
        }
    };
    return GestorLibros;
}());
exports["default"] = GestorLibros;
