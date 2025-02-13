class Products {

    constructor(name, price) {

        this.name = name,
        this._price = price

    }

    get priceDefinetive() {

        return this._price

    }

    set priceDefinetive(price){
        
        this._price = price

        price >= 0 ? (this._price = price) : console.log("Preco invalido! ")
    }
}

let myProduct = new Products("Shampoo")
myProduct.priceDefinetive = 25
console.log(myProduct)