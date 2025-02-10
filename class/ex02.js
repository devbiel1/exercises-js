class Animal {

    constructor(name, species) {

        this.name = name
        this.species = species

    }

}

class Dog extends Animal {

    speak() {

        console.log(`O cachorro ${this.name} faz som!`)

    }
    
}

const myDog = new Dog("caramelo", "vira-lata")
myDog.speak()