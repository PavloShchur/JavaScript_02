let numbers = [45, 78, 4, 54, 0, 7];

let val;

// sort by first number
val = numbers.sort();

// use the "compare function"
val = numbers.sort(function ( x, y ) {
    return x - y;
});

console.log(val);