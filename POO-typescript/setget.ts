class MisDatos {

    constructor(
        private _nombre = 'no-definido',
        private _apellido = 'no-definido'
    ){}

    set cambiarNombre(nombre: string){
        this._nombre = nombre
    }
    set cambiarApellido(apellido: string){
        this._apellido = apellido
    }

    get nombreCompleto(){
        return `Tu nombre completo es : ${this._nombre} ${this._apellido}`
    }
}

function main():void{
	let d: MisDatos
	d = new MisDatos()
	console.log(d)
	d.cambiarNombre = 'Carlos'
	d.cambiarApellido = 'PPPP'
	console.log(d.nombreCompleto)
}

main()