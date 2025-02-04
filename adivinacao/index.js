function randomNumberGenereted(max) {       

    return Math.floor(Math.random() * max)      

}

var randomNumber = randomNumberGenereted(10)

console.log("Adivinhe um numero de 1 a 10...")

if (guess != randomNumber) {

    console.log("Errado, tente novamente...")

} else {

    console.log("Correto")

}