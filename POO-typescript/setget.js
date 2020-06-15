var MisDatos = /** @class */ (function () {
    function MisDatos(_nombre, _apellido) {
        if (_nombre === void 0) { _nombre = 'no-definido'; }
        if (_apellido === void 0) { _apellido = 'no-definido'; }
        this._nombre = _nombre;
        this._apellido = _apellido;
    }
    Object.defineProperty(MisDatos.prototype, "cambiarNombre", {
        set: function (nombre) {
            this._nombre = nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MisDatos.prototype, "cambiarApellido", {
        set: function (apellido) {
            this._apellido = apellido;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MisDatos.prototype, "nombreCompleto", {
        get: function () {
            return "Tu nombre completo es : " + this._nombre + " " + this._apellido;
        },
        enumerable: false,
        configurable: true
    });
    return MisDatos;
}());
function main() {
    var d;
    d = new MisDatos();
    console.log(d);
    d.cambiarNombre = 'Carlos';
    d.cambiarApellido = 'PPPP';
    console.log(d.nombreCompleto);
}
main();
