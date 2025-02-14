class Books {

    static biblioteca = [];

    static adicionarLivro(nome, autor, numPag) {

        Books.biblioteca.push(
            {
                nome: nome,
                autor: autor,
                numPag: numPag,
                disponibilidade: true
            }
        )
    }

    static emprestar(nome) {

        let livroSolicitado = Books.biblioteca.find((livro) => livro.nome.toLowerCase() === nome.toLowerCase())
        
        if (livroSolicitado === undefined) {
            console.log("Nao temos esse livro em nossa biblioteca")
            return

        }

        if (livroSolicitado.disponibilidade == false) {
            console.log("O livro solicitado esta indisponivel no momento")

        } else {

            livroSolicitado.disponibilidade = false
            console.log("Livro Emprestado!")

        }

    }

    static devolver(nome) {

        let livroSolicitado = Books.biblioteca.find((livro) => livro.nome.toLowerCase() == nome.toLowerCase())

        if(livroSolicitado === undefined) {
            console.log("Nao temos esse livro em nossa biblioteca")

        }

        if(livroSolicitado.disponibilidade == true) {
            console.log("Esse livro ja foi devolvido")

        } else {

            livroSolicitado.disponibilidade = true
            console.log("Livro devolvido com suscesso. Obrigado!")

        }

    }

}

Books.adicionarLivro("Crime e Castigo", "Dostoievski", 500)
Books.adicionarLivro("A Arte da Guerra", "Sun Tzu", 100)

Books.emprestar("Crime e Castigo")
console.log(Books.biblioteca)

Books.devolver("Crime e Castigo")
console.log(Books.biblioteca)