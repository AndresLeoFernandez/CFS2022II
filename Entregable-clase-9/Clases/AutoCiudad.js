"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Automotor_1 = require("./Automotor");
var AutoCiudad = /** @class */ (function (_super) {
    __extends(AutoCiudad, _super);
    function AutoCiudad() {
        var _this = _super.call(this) || this;
        _this.capacidadTanque = 60;
        _this.consumo = 0.01;
        return _this;
    }
    AutoCiudad.prototype.acelerar = function () {
        if (this.cantidadCombustible > this.consumo) {
            this.velocidadActual += 1;
            this.cantidadCombustible -= this.consumo;
        }
        else {
            console.log("STOP");
        }
    };
    AutoCiudad.prototype.frenar = function () {
        if (this.cantidadCombustible > 0.2) {
            if (this.velocidadActual > 1) {
                this.velocidadActual -= 1;
                this.cantidadCombustible -= this.consumo;
            }
        }
        else {
            console.log("STOP");
        }
    };
    return AutoCiudad;
}(Automotor_1.Automotor));
exports["default"] = AutoCiudad;
