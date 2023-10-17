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

//Desafio 3

let string = "Qualquer frase aqui"

function splitSentence(string) {
    let arrayDeStrings = string.split(" ");
    return arrayDeStrings
}

console.log(splitSentence(string));

