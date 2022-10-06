"use strict";
exports.__esModule = true;
exports.generarPatente = void 0;
var Automotor_1 = require("../Clases/Automotor");
var Motor_1 = require("../Clases/Motor");
var letras = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
function Azar(tope) {
    return Math.floor(Math.random() * tope);
}
/* Generar Patente
*   Funcion auxiliar que retorna una patente con formato LLL-999 donde
    L es una letra del abecedario y
    9 un numero entre 0 y 9.
*/
function generarPatente() {
    var resultado = "";
    resultado += letras[Azar(25)];
    resultado += letras[Azar(25)];
    resultado += letras[Azar(25)];
    resultado += "-";
    resultado += Azar(10);
    resultado += Azar(10);
    resultado += Azar(10);
    return resultado;
}
exports.generarPatente = generarPatente;
/* Crear Automotor
*  Transforma una cadena que contiene todos los campos que necesita un automotor para crearse y
*  genera un objeto Automotor con su respectivo Motor
*/
function crearAutomotor(automotorTexto, arrayAutomotores) {
    var propiedadesAutomotor = automotorTexto.split(',');
    var modelo = propiedadesAutomotor[0];
    var marca = propiedadesAutomotor[1];
    var año = Number(propiedadesAutomotor[2]);
    var patente = propiedadesAutomotor[3];
    var modeloMotor = propiedadesAutomotor[4];
    var marcaMotor = propiedadesAutomotor[5];
    var añoMotor = Number(propiedadesAutomotor[6]);
    var codigo = modeloMotor + "-" + marcaMotor + "-" + añoMotor;
    var motor = new Motor_1["default"](modeloMotor, marcaMotor, añoMotor, codigo);
    var nuevoAutomotor = new Automotor_1["default"](modelo, marca, año, motor, patente);
    arrayAutomotores.push(nuevoAutomotor);
}
exports["default"] = crearAutomotor;
