class Carro{
    
    private marca:string
    private puertas:number
    private modelo:number
    private uso:string 
    
    constructor(
        marca:string,puertas:number,
        modelo:number,uso:string
    ){
        this.marca   = marca
        this.puertas = puertas
        this.modelo  = modelo
        this.uso     = uso
    }

    get Marca():string{
        return this.marca
    }

    get Puertas():number{
        return this.puertas
    }    
    
    get Modelo():number{
        return this.modelo
    }

    get Uso():string{
        return this.uso
    }
}

export default Carro