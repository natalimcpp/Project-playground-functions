//Desafio 1

function compareTrue(a, b) {
    if (a == 20 && b == 60) {
        return console.log("verdadeiro");
    } else {
        console.log("falso");
        }

} 

let ex1= 4*5;
let ex2= 41+20;

console.log(compareTrue(ex1, ex2));


//Desafio 2 

function calcArea(base, height) {
    let area = (base * height / 2);
    return area;
}

let base = 10
let height = 50

console.log(calcArea(base, height)); 


//Desafio 2 com listas

function calcArea(base, height) {
    let areas = [];

    for (let i = 0; i < base.length; i++) {
        areas.push((base[i] * height[i]) / 2);
    }

    return areas;
}

let bases = [10, 5, 51];
let heights = [50, 2, 1];

let result = calcArea(bases, heights);
console.log(result);



//Desafio 3
 
let frase =  "vamo que vamo"
let arrayDePalavras = frase.split(" ");
console.log(arrayDePalavras)



//Desafio 3.2

let string = "Qualquer frase aqui"

function splitSentence(string) {
    let arrayDeStrings = string.split(" ");
    return arrayDeStrings
}

console.log(splitSentence(string));




//Desafio 4 

let lista = ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
let concatName = [lista[lista.length - 1], lista[0]];
console.log(concatName);



//Desafio 4

function concatName(array) {

    let resultado = [array[array.length - 1], array[0]];
    console.log(resultado);
}

let listaExemplo = ['foguete', 'não', 'tem', 'ré']

concatName(listaExemplo);

//Desafio 5

function footballPoints(wins, ties) {
    let pontuacao = (wins * 3) + (ties * 1);
    return pontuacao;
}

let wins = 14;
let ties = 8;

console.log(footballPoints(wins, ties));

//Desafio 5 usando menos código - com ajuda do chatgpt

function footballPoints(wins, ties) {
    return (wins * 3) + ties;
}


//Desafio 6 

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

let arrayTeste = [9, 1, 2, 25, 3, 9, 5, 25, 7, 25];
let maiorNumero = highest(arrayTeste);
let repeticoes = highestCount(arrayTeste,maiorNumero);

console.log(repeticoes);

//Desafio 7

function catAndMouse(x, y, z) {
    let mouse = x;
    let cat1 = y;
    let cat2 = z;

    if ((Math.abs(mouse-cat1)) < (Math.abs(mouse - cat2))) {
        return "cat 1"
    } else if ((Math.abs(mouse-cat1)) > (Math.abs(mouse - cat2))) {

        return "cat 2"         
    } else {

        return "os gatos trombam e o gato foge"
    }
}

console.log (catAndMouse(5, 1, 8));
console.log (catAndMouse(8, 2, 20));
console.log (catAndMouse(5, 3, 7));

//Desafio 8

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


