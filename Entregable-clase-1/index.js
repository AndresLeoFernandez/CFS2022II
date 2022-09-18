"use strict";
exports.__esModule = true;
// Importo la libreria
var fs = require("fs");
// alojo en la variable texto el contenido del archivo como un string
var texto = fs.readFileSync("numeros.txt", "utf-8");
//let texto : string = "1 2 3 4 5"
// alojo en la variable palabras arreglo de string caa una de las palabras
var valores = texto.split(" ");
var arrOfNum = valores.map(function (str) { return Number(str); });
var sumarArreglo = function (arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
};
console.log(sumarArreglo(arrOfNum));
