"use strict";
exports.__esModule = true;
exports.Automotor = void 0;
var Automotor = /** @class */ (function () {
    function Automotor() {
        this.estaPrendido = false;
        this.velocidadActual = 0;
        this.cantidadCombustible = 10;
    }
    Automotor.prototype.cargarCombustible = function (cantidad) {
        while ((this.cantidadCombustible < this.capacidadTanque - 1) && (cantidad > 0)) {
            this.cantidadCombustible += 1;
            console.log("".concat(this.cantidadCombustible, " Cargando... ").concat(this.cantidadCombustible, " litros."));
            cantidad -= 1;
        }
        if (cantidad > 0) {
            console.log("Tanque lleno, retire la manguera.");
        }
    };
    Automotor.prototype.verCombustible = function () {
        return this.cantidadCombustible;
    };
    Automotor.prototype.prender = function () {
        if (this.cantidadCombustible > this.consumo) {
            this.estaPrendido = true;
            console.log("Auto Encendido.");
            this.cantidadCombustible -= this.consumo;
        }
    };
    Automotor.prototype.apagar = function () {
        this.estaPrendido = false;
        console.log("Auto Apagado.");
    };
    Automotor.prototype.ver = function () {
        console.log(this);
    };
    return Automotor;
}());
exports.Automotor = Automotor;
