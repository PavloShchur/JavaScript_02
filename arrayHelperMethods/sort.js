let numbers = [45, 78, 4, 54, 0, 7];

let val;

// sort by first number
val = numbers.sort();

// use the "compare function"
val = numbers.sort(function ( x, y ) {
    return x - y;
});

console.log(val);

/*
John and a friend invented a simple game where the player with the highest value of his height (in centimeters) plus five times his age wins (what a silly game :)

1. Create variables for the heights and ages of two friends and assign them some values
2. Calculate their scores
3. Decide who wins and print the winner to the console. Include the score in the string that you output to the console. Don't forget that there can be a draw (both players with the same score).

4. EXTRA: Add a third player and now decide who wins. Hint: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
*/

// SOLUTION:
let heightJohn = 170;
let heightMike = 195;
let ageJohn = 36;
let ageMike = 29;

let scoreJohn = heightJohn + 5 * ageJohn;
let scoreMike = heightMike + 5 * ageMike;


if (scoreJohn > scoreMike) {
    console.log('John wins the game with ' + scoreJohn + ' points!');
} else if (scoreMike > scoreJohn) {
    console.log('Mike wins the game with ' + scoreMike + ' points!');
} else if (scoreJohn === scoreMike) {
    console.log('There is a draw.');
}

let heightMary = 158;
let ageMary = 31;
let scoreMary = heightMary + 5 * ageMary;

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
    console.log(`John wins the game with ${scoreJohn}  points!`);
} else if (scoreMike > scoreJohn && scoreMike > scoreMary) {
    console.log(`Mike wins the game with ${scoreMike} points!`);
} else if (scoreMary > scoreJohn && scoreMary > scoreMike) {
    console.log(`Mary wins the game with ${scoreMary} points!`);
} else {
    console.log('It\'s a draw.');
}

let players = [
    {name : 'John', score : scoreJohn},
    {name : 'Mike', score : scoreMike},
    {name : 'Mary', score : scoreMary},
];

players.sort = function(a,b) {
    return a[1].score > b[1].score ? 1 : a[1].score <b[1].score ? -1 : 0;
};

for(let i = 0; i < players.length; i++){
    console.log(players[i]);
}
