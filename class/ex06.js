class Student {

    constructor(id, notes, situation = null) {

        this.id = id
        this.notes = notes
        this.situation = situation

    }

    calcMedia() {

        if (this.notes.length === 0) {
            throw new Error("Notas do aluno nao informadas.")
        }

        const somatorio = this.notes.reduce((acc, nota) => acc + nota)
        const media = somatorio / this.notes.length

        this.situation = media >= 6 ? "Aprovado" : "Reprovado"

        return Math.round(media)

    }

}

var aluno01 = new Student(22, [4, 4, 5])
console.log(aluno01.calcMedia())
console.log(aluno01)
