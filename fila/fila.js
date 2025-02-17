class Fila {

    constructor(items = []) {

        this.items = items

    }

    enfileirar(item) {

        this.items.push(item)
        this.exibir()

    }

    desinfileirar() {

        if(this.items.length === 0) {
            console.log('A fila esta vazia')

        } else {

            this.items.shift()
            this.exibir()

        } 
    }
    
    exibir() {

        console.log(this.items.join(" -> "))

    }

}
var myFila = new Fila()
myFila.enfileirar(10)
myFila.enfileirar(20)
myFila.enfileirar(30)
myFila.desinfileirar()