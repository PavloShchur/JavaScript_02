let numbers = [45, 78, 4, 54, 0, 7];

let val;

// find
let under50 = (num) => num < 50;

val = numbers.find(under50);

console.log(val);