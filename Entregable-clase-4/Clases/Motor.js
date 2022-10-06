"use strict";
exports.__esModule = true;
var Motor = /** @class */ (function () {
    function Motor(modelo, marca, año, codigo) {
        this.modelo = modelo;
        this.marca = marca;
        if (0 < año && año < 2099) {
            this.año = año;
        }
        else {
            this.año = 2022;
        }
        this.codigo = codigo;
    }
    Motor.prototype.getModelo = function () {
        return this.modelo;
    };
    Motor.prototype.getMarca = function () {
        return this.marca;
    };
    Motor.prototype.getAño = function () {
        return this.año;
    };
    Motor.prototype.getCodigo = function () {
        return this.codigo;
    };
    Motor.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Motor.prototype.setCodigo = function (codigo) {
        this.codigo = codigo;
    };
    return Motor;
}());
exports["default"] = Motor;
