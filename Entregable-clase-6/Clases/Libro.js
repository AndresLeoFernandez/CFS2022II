"use strict";
exports.__esModule = true;
var Libro = /** @class */ (function () {
    function Libro(titulo, autor, editorial, codigoBarra) {
        this.titulo = titulo;
        this.autor = autor;
        this.editorial = editorial;
        this.codigoBarra = codigoBarra;
    }
    Libro.prototype.getTitulo = function () {
        return this.titulo;
    };
    Libro.prototype.getAutor = function () {
        return this.autor;
    };
    Libro.prototype.getEditorial = function () {
        return this.editorial;
    };
    Libro.prototype.getCodigoBarra = function () {
        return this.codigoBarra;
    };
    Libro.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Libro.prototype.setAutor = function (autor) {
        this.autor = autor;
    };
    Libro.prototype.setEditorial = function (editorial) {
        this.editorial = editorial;
    };
    Libro.prototype.setCodigoBarra = function (codigoBarra) {
        this.codigoBarra = codigoBarra;
    };
    return Libro;
}());
exports["default"] = Libro;
