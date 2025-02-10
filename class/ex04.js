class Products {

    constructor(name, price) {

        this.name = name,
        this.price = price

    }

    set priceDefinetive(price){
        
        this.price = price

        if (price < 0) {

            return "preco invalido"

        } else {

            this.price = price

        }
    }

    get priceDefinetive() {

        return this.price

    }

}

let myProduct = new Products("Shampoo")
myProduct.priceDefinetive = 25
console.log(myProduct)