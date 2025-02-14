class Books {

    static biblioteca = [];

    constructor(nome, pagNum, disponibilidade = true) {

        this.nome = nome
        this.pagNum = pagNum
        this.disponibilidade = disponibilidade

        Books.biblioteca.push(

            {
                nome: this.nome,
                paginas: this.pagNum,
                disponibilidade: this.disponibilidade
            }         
        )
    }

    static emprestar(nome) {

        var livroSolicitado = Books.biblioteca.find((element) => element.nome == nome)
        
        if (livroSolicitado === undefined) {

            throw new Error("Livro indisponivel")
        }

        if (livroSolicitado.disponibilidade == false) {

            console.log("O livro solicitado esta indisponivel no momento")

        } else {

            livroSolicitado.disponibilidade = false
            return livroSolicitado

        }

    }

}

var myBook = new Books("Crime e Castigo", 300)
var yourBook = new Books("A Arte da Querra", 500)

console.log(myBook)
console.log(Books.biblioteca)
console.log(Books.emprestar("Crime e Castigo"))
console.log(myBook)