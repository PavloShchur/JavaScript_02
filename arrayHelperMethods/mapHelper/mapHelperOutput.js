var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

// doubledNumbers.forEach(function (doubledNumber) {
//     console.log(doubledNumber);
// });

// var doubled = numbers.map(function (number) {
//     return number * 2;
// });
//
// console.log(doubled);

var cars = [
    {model : 'Buick', price : 'cheap'},
    {model : 'Chevrolet', price : 'average'},
    {model : 'BMV', price : 'expensive'},
    {model : 'Camaro', price : 'expensive'}
];

var prices = cars.map(function (car) {
    return car.price;
});

console.log(prices);





















