
var array = [1, 3, 67, 4]
var array2 = [2, 88, 55, 3]

function biggerSmaller(arr) {

    return {

        array: arr,
        bigger: Math.max(...arr),
        smaller: Math.min(...arr)

    }

}

console.log(biggerSmaller(array))
console.log(biggerSmaller(array2))