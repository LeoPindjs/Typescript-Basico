"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Carro = /** @class */ (function () {
    function Carro(marca, puertas, modelo, uso) {
        this.marca = marca;
        this.puertas = puertas;
        this.modelo = modelo;
        this.uso = uso;
    }
    Object.defineProperty(Carro.prototype, "Marca", {
        get: function () {
            return this.marca;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "Puertas", {
        get: function () {
            return this.puertas;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "Modelo", {
        get: function () {
            return this.modelo;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Carro.prototype, "Uso", {
        get: function () {
            return this.uso;
        },
        enumerable: true,
        configurable: true
    });
    return Carro;
}());
exports.default = Carro;
