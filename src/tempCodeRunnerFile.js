function footballPoints(wins, ties) {
    return (wins * 3) + ties;
}

let wins = 14;
let ties = 8;

console.log(footballPoints(wins, ties));