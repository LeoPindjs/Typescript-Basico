var c = console.log;
var Auto = /** @class */ (function () {
    function Auto() {
    }
    Auto.prototype.acelerar = function () { c('Estoy Acelerando'); };
    Auto.prototype.frenar = function () { c('Acabo de frenar'); };
    return Auto;
}());
var Moto = /** @class */ (function () {
    function Moto() {
    }
    Moto.prototype.acelerar = function () { c('Estoy Acelerando'); };
    Moto.prototype.frenar = function () { c('Acabo de frenar'); };
    return Moto;
}());
var misTransportes = /** @class */ (function () {
    function misTransportes() {
    }
    misTransportes.transportes = function (m) {
        c('Eres un medio de transporte de tipo', m);
        m.acelerar();
        m.frenar();
    };
    return misTransportes;
}());
function main() {
    var a;
    var m;
    a = new Auto();
    m = new Moto();
    misTransportes.transportes(a);
    misTransportes.transportes(m);
}
main();
