// Desafio 1
function compareTrue() {
  function compareTrue (a, b) {
    if (a === true && b === true) {
        return true;
    }   else {return false;}
    }
}

// Desafio 2
function calcArea() {
  function calcArea (base, height) {
    return ((base * height)/2);
}
}

// Desafio 3
function splitSentence() {
  function splitSentence (sentence) {
    let myArrey = [];
    myArrey.push = sentence.split(' ');
    return myArrey;
}
}

// Desafio 4
function concatName() {
  function concatName (myArrey) {
    let concat = (myArrey[(myArrey.length - 1)]) + ',' + ' ' + myArrey[0];
    return concat;
}
}

// Desafio 5
function footballPoints() {
  function footballPoints (wins, ties) {
    return ((wins * 3) + (ties))
}
}

// Desafio 6
function highestCount() {
  function highestCount (myArrey) {
    newArrey = myArrey.sort();
    for ( index = (myArrey.length-1); ((myArrey[index]) - (myArrey[index-1])) == 0; index -= 1);
        return (myArrey.length - index)
    }
}

// Desafio 7
function catAndMouse() {
  function catAndMouse (mouse, cat1, cat2) {
    mouse = Math.abs(mouse);
    cat1 = Math.abs(cat1);
    cat2 = Math.abs(cat2);
    if (cat1 == cat2) {return 'os gatos trombam e o rato foge';}
    if ((cat1 - mouse) < (cat2)) { return 'cat1';}
    if (((cat2 - mouse) < (cat1))) { return 'cat2';}
}
}

// Desafio 8
function fizzBuzz() {
  function fizzBuzz(myArray) {
    for (index = 0; index < myArray.length; index += 1) {
    if (myArray[index] == 0){
      myArray[index] = 'bug!';}
    else if (myArray[index] % 3 == 0 && myArray[index] % 5 == 0){
      myArray[index] = 'fizzBuzz';}
    else if ((myArray[index] % 3) == 0) {
      myArray[index] = 'fizz';}
    else if ((myArray[index] % 5) == 0) {
      myArray[index] = 'buzz';}
    else {
      myArray[index] = 'bug!';}
    }     return myArray
  }
}

// Desafio 9
function encode() {
  function encode(string) {
    string = string.split('');
    let input = ['a', 'e', 'i', 'o', 'u'];
    let output = [1,2,3,4,5];
    for (index = 0; index < string.length; index += 1){
        for (index2 = 0; index2 < input.length; index2 += 1) {
            if (string[index] == input[index2]) {string[index] = output[index2];}
        }
    } return string.join('');
}
}
function decode() {
  function decode(string) {
    string = string.split('');
    let output = ['a', 'e', 'i', 'o', 'u'];
    let input = [1,2,3,4,5];
    for (index = 0; index < string.length; index += 1){
        for (index2 = 0; index2 < input.length; index2 += 1) {
            if (string[index] == input[index2]) {string[index] = output[index2];}
        }
    } return string.join('');
}
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
