class Animal {

    constructor(name, species) {

        this.name = name
        this.species = species

    }

    speak() {

        console.log(`O animal ${this.name} faz som!`)

    }

}

const dog = new Animal("cachorro", "labrador")

dog.speak()
console.log(dog)