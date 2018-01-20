var numbers = [10, 20, 30, 40, 50];
var sum = 0;

for(var i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

sum = numbers.reduce(function (sum, number) {
    return sum + number;
}, 0);

console.log(sum);

var primaryColors = [
    {color : 'red'},
    {color : 'yellow'},
    {color : 'black'},
    {color : 'orange'},
];

var result;

result = primaryColors.reduce(function (previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);

console.log(result);

function balancedParens(string) {
    return !string.split("").reduce(function (previous, char) {
        if(previous < 0) {return previous;}
        if(char === '(') {return ++previous;}
        if(char === ')') {return --previous;}
        return previous;
    }, 0);
}

console.log(balancedParens(')('));





















