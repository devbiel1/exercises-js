class Funcionario {

    constructor(nome, cargo, salario = null) {

        this.nome = nome
        this.cargo = cargo
        this.salario = salario

    }

    calcSalario() {

        if (this.cargo == "Junior") {

            this.salario = 2500

        } else if (this.cargo == "Pleno") {

            this.salario = 5000

        } else if (this.cargo == "Senior") {

            this.salario = 10000

        } else {

            throw new Error("informe um cargo valido")

        }
        
    }

}

var func1 = new Funcionario("Gabriel", "Junior")
func1.calcSalario()

console.log(func1)
