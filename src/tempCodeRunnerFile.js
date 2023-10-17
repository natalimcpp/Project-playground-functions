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