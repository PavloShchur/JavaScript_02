var colors = ['red', 'blue', 'green', 'white', 'black', 'yellow'];

// for(var i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }

//in this case we are passing an anonymous function
colors.forEach(function (color) {
    console.log('color: ' + color)
});

//Create an array of numbers
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Create a variable to hold the sum
var sum = 0;
//Create a method which will calculate the sum
function adder(number) {sum += number;}
//Loop over the array, incrementing the sum variable
numbers.forEach(adder);
//Print the sum variable
console.log('sum: ' + sum);










































































