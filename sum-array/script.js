function sumArray(arr) {

    return arr.reduce((acc, num) => acc + num, 0)

}

array = [1, 2, 3, 4, 5]
console.log(sumArray(array))