var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConnDB = /** @class */ (function () {
    function ConnDB(_port, _host, _name) {
        if (_port === void 0) { _port = 3000; }
        if (_host === void 0) { _host = 'localhos'; }
        if (_name === void 0) { _name = 'no-definido'; }
        this._port = _port;
        this._host = _host;
        this._name = _name;
    }
    return ConnDB;
}());
var Usuarios = /** @class */ (function (_super) {
    __extends(Usuarios, _super);
    function Usuarios(port, host, name) {
        if (port === void 0) { port = 3000; }
        if (host === void 0) { host = 'Localhost'; }
        if (name === void 0) { name = 'Usuarios'; }
        var _this = _super.call(this, port, host, name) || this;
        _this.port = port;
        _this.host = host;
        _this.name = name;
        return _this;
    }
    Usuarios.prototype.findAll = function () {
        console.log('Mostrando todo los usarios');
    };
    Usuarios.prototype.findOne = function (_id) {
        return "Mostrando el usuario con id : " + _id;
    };
    Usuarios.prototype.insert = function (data) {
        console.log('Insertó el usuario', data);
    };
    Usuarios.prototype.update = function (_id, data) {
        return "\n            Se modificoa la data con id : " + _id + ".\n            La nueva data es :" + JSON.stringify(data) + "\n        ";
    };
    Usuarios.prototype["delete"] = function (_id) {
        return "\nSe elimino la data con id : " + _id;
    };
    return Usuarios;
}(ConnDB));
function main() {
    var data;
    var usuario;
    data = {
        _id: '12345',
        nombre: 'Carlos',
        nick: 'carcar34',
        email: 'carcar34@gmail.com'
    };
    usuario = new Usuarios();
    usuario.findAll();
    usuario.insert(data);
    data = {
        _id: '12345',
        nombre: 'CarlosA',
        nick: 'carA34',
        email: 'carA34@gmail.com'
    };
    console.log(usuario.findOne('12345'), usuario["delete"]('12345'), usuario.update('12345', data));
}
main();
