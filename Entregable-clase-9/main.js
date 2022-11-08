"use strict";
exports.__esModule = true;
var Camioneta_1 = require("./Clases/Camioneta");
var AutoCiudad_1 = require("./Clases/AutoCiudad");
/* Creo una camioneta para pruebas*/
var camioneta = new Camioneta_1["default"]();
camioneta.ver();
camioneta.prender();
camioneta.ver();
for (var t = 1; t < 15; t++) {
    camioneta.acelerar();
}
camioneta.ver();
/* Creo un auto particular para pruebas*/
var autoParticular = new AutoCiudad_1["default"]();
autoParticular.ver();
autoParticular.prender();
autoParticular.ver();
for (var t = 1; t < 15; t++) {
    autoParticular.acelerar();
}
autoParticular.cargarCombustible(15);
autoParticular.ver();
autoParticular.cargarCombustible(45);
autoParticular.ver();
