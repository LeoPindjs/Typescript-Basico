let saludar = (nombre:string):string => 
`<h1>Hola ${nombre} como vas en typescript ?</h1>`

let el       = <HTMLElement> document.querySelector('.saludo')
el.innerHTML = saludar('Leonardo')

