interface IData{
    _id: string
    nombre: string
    nick: string
    email: string
} 

abstract class ConnDB{

    protected constructor(
        private _port:number = 3000,
        private _host: string = 'localhos',
        private _name:string = 'no-definido'
    ) { }

    protected abstract findAll(): void
    protected abstract findOne(_id:string):string
    protected abstract insert(data:IData): void
    protected abstract update(_id:string,data:IData): string
    protected abstract delete(_id:string): string
    
}

class Usuarios extends ConnDB {

    constructor(
        private port: number = 3000,
        private host: string = 'Localhost',
        private name: string = 'Usuarios'
    ) {
        super(port,host,name)
    }

    public findAll(): void{
        console.log('Mostrando todo los usarios')
    }

    public findOne(_id: string):string {
        return `Mostrando el usuario con id : ${_id}`
    }

    public insert(data: IData):void {
        console.log('Insertó el usuario',data)
    }

    public update(_id: string,data:IData):string {
        return `
            Se modificoa la data con id : ${_id}.
            La nueva data es :${JSON.stringify(data)}
        `
    }

    public delete(_id: string):string {
        return `\nSe elimino la data con id : ${_id}`
    }

}

function main():void {

    let data: IData
    let usuario :Usuarios

    data = {
        _id:'12345',
        nombre: 'Carlos',
        nick: 'carcar34',
        email:'carcar34@gmail.com'
    }

    usuario = new Usuarios()

    usuario.findAll()

    usuario.insert(data)

    data = {
        _id:'12345',
        nombre: 'CarlosA',
        nick: 'carA34',
        email:'carA34@gmail.com'
    }
   
    console.log(
        usuario.findOne('12345'),
        usuario.delete('12345'),
        usuario.update('12345', data)
    )

}

main()

