var saludar = function (nombre) {
    return "<h1>Hola " + nombre + " como vas en typescript ?</h1>";
};
var el = document.querySelector('.saludo');
el.innerHTML = saludar('Leonardo');
