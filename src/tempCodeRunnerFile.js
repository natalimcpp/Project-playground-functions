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
