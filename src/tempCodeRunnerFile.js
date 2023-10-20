function highest(arr) {
    
    return Math.max(...arr);
};

function highestCount(arr,numero) {
    let contador = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == numero) {
            contador++;
        }
    }
    return contador;
}

let arrayTeste = [0, 0, 0];
let maiorNumero = highest(arrayTeste);
let repeticoes = highestCount(arrayTeste,maiorNumero);

console.log(repeticoes);