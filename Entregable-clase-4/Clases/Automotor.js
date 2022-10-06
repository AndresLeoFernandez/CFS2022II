"use strict";
exports.__esModule = true;
var Automotor = /** @class */ (function () {
    function Automotor(modelo, marca, año, motor, patente) {
        this.modelo = modelo;
        this.marca = marca;
        if (0 < año && año < 2099) {
            this.año = año;
        }
        else {
            this.año = 2022;
        }
        this.motor = motor;
        if (patente == undefined) {
            this.patente = "pendiente";
        }
        else {
            this.patente = patente;
        }
    }
    Automotor.prototype.getModelo = function () {
        return this.modelo;
    };
    Automotor.prototype.getMarca = function () {
        return this.marca;
    };
    Automotor.prototype.getAño = function () {
        return this.año;
    };
    Automotor.prototype.getPatente = function () {
        return this.patente;
    };
    Automotor.prototype.getMotor = function () {
        return this.motor;
    };
    Automotor.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Automotor.prototype.setPatente = function (patente) {
        this.patente = patente;
    };
    Automotor.prototype.setAño = function (año) {
        this.año = año;
    };
    Automotor.prototype.estaPatentado = function () {
        return this.patente != "pendiente";
    };
    return Automotor;
}());
exports["default"] = Automotor;
