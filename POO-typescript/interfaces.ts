const c = console.log

interface IMediosTransporte{
    acelerar():void;
    frenar(): void;
}

class Auto implements IMediosTransporte{
    constructor() { }

    acelerar() {c('Estoy Acelerando')}

    frenar() { c('Acabo de frenar') }
}

class Moto implements IMediosTransporte{
    constructor() { }

    acelerar() {c('Estoy Acelerando')}

    frenar() {c('Acabo de frenar')}
}


class misTransportes{

    public static transportes(m:IMediosTransporte){
        c('Eres un medio de transporte de tipo', m)
        m.acelerar()
        m.frenar()
    }
}

function main(): void{
    let a: IMediosTransporte
    let m: IMediosTransporte

    a = new Auto()
    m = new Moto()

    misTransportes.transportes(a)
    misTransportes.transportes(m)
}

main()

