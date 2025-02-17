class Paciente {

    constructor(nome, idade, consultas = []) {

        this.nome = nome
        this.idade = idade
        this.consultas = consultas

    }

    adicionarConsulta(dia, medico) {

        this.consultas.push({
            
            dia: dia,
            medico: medico

        })

    }

    exibirConsultas() {

        console.log(this.consultas)

    }

}

var myPaciente = new Paciente("Gabriel", 19)

myPaciente.adicionarConsulta("09/03/2025", "Luiz")
myPaciente.adicionarConsulta("09/03/2022", "Marcos")

console.log(myPaciente)
myPaciente.exibirConsultas()