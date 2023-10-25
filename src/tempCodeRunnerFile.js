function fizzBuzz(arr) {

    let arrResultado = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            arrResultado.push('fizzBuzz')
        } else if (arr[i] % 3 === 0) {
            arrResultado.push('fizz')
        } else if (arr[i] % 5 === 0) {
            arrResultado.push('buzz')
        } else {
            arrResultado.push('bug!')
        }
    }

    return arrResultado;
}

let array1 = [2, 15, 7, 9, 45]
console.log(fizzBuzz(array1))

let array2 = [7, 9]
console.log(fizzBuzz(array2))

let array3 = [9, 25]
console.log(fizzBuzz(array3))