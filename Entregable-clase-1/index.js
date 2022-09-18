"use strict";
exports.__esModule = true;
// Importo la libreria
var fs = require("fs");
// Alojo en la variable texto el contenido del archivo numeros.txt como una cadena de string
var texto = fs.readFileSync("numeros.txt", "utf-8");
// Alojo en el arreglo de string valores una cadena de caracteres por posicion que representa un numero
var valores = texto.split(" ");
// Alojo en el arreglo arrOfNum cada uno de los valores en formato Number
var arrOfNum = valores.map(function (str) { return Number(str); });
/* Funcion sumaArrego
*  (in) Ingresa arreglo de numeros
*  (out) Retorna un valor numerico que es la suma
*/
var sumarArreglo = function (arreglo) {
    var suma = 0;
    for (var i = 0; i < arreglo.length; i++) {
        suma += arreglo[i];
    }
    return suma;
};
//muestro por consola el resultado total
console.log(sumarArreglo(arrOfNum));
