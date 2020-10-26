'use strict';
/*
let hasDriversLicense = true;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;

function logger() {
    console.log('My name is Gustavo');
}

// calling, running or invoking the function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges}.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// function declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}
const gustavoAge = calcAge1(1983);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}
const gustavoAge2 = calcAge2(1983);

console.log(gustavoAge, gustavoAge2);


// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const gustavoAge3 = calcAge3(1983);
console.log(gustavoAge3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1983, 'Gustavo'));

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

const calcAge = function (year) {
    return 2037 - year;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstName} has alrealdy retired`)
        return -1;
    }
}

console.log(yearsUntilRetirement(1983, 'Gustavo'));
console.log(yearsUntilRetirement(1954, 'Mazé'));

/////////////////////////////////////////////////
Coding Challenge #1

Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!

Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time

Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores

GOOD LUCK


const calcAverage = (score1, score2, score3) => {
    const average = (score1 + score2 + score3) / 3;
    return average;
}

// Data 1
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`None of teams have a double of points to win`);
    }
}

checkWinner(avgDolphins, avgKoalas);

// Data 2
avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

checkWinner(avgDolphins, avgKoalas);


const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Gustavo';
const gustavo = [firstName, 'de Paula', 2037 - 1983, 'frontend', friends];
console.log(gustavo);
console.log(gustavo.length);

function calcAge(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);


// Add Elements
const friends = ['Michael', 'Steven', 'Peter'];
const newLength = friends.push('Jay');
console.log(friends);
console.log(newLength);

friends.unshift('Jonh');
console.log(friends);

// Remove Elements
friends.pop(); //last
const popped = friends.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));

friends.push(23);
console.log(friends.includes('Steven'));
console.log(friends.includes('Bob'));
console.log(friends.includes(23));

if (friends.includes('Steven')) {
    console.log('You have a friend called Steven');
}


/////////////////////////////////////////////////
Coding Challenge #2

Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.

Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip

Test data: 125, 555 and 44



Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)

GOOD LUCK


function calcTip(value) {
    if (value >= 50 && value <= 300) {
        let tip = value * 0.2;
        return tip;
    } else {
        let tip = value * 0.15;
        return tip;
    }
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(`The tips are ${tips}`);

const total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]];
console.log(`The total is ${total}`);


const gustavoArray = [
    'Gustavo',
    'de Paula',
    2037 - 1983,
    'frontend',
    ['Norberto', 'Tremendo', 'Pelé']
];


const gustavo = {
    firstName: 'Gustavo',
    lastName: 'de Paula',
    age: 2037 - 1983,
    job: 'frontend',
    friend: ['Norberto', 'Tremendo', 'Pelé']
};
console.log(gustavo);

console.log(gustavo.lastName);
console.log(gustavo['lastName']);

const nameKey = 'Name';
console.log(gustavo['first' + nameKey]);
console.log(gustavo['last' + nameKey]);

const interestIn = prompt('What do you want know about Gustavo? Choose between firstName, lastName, age, job and friends');

if (gustavo[interestIn]) {
    console.log(gustavo[interestIn]);
} else {
    console.log(`Wrong request! Choose between firstName, lastName, age, job and friends`)
}

gustavo.location = 'Brazil';
gustavo['instagram'] = '@gusdipaula';
console.log(gustavo);

// Challenge
// Gustavo has 3 friends, and the his best friend is called Norberto

console.log(`${gustavo.firstName} has ${gustavo.friend.length} friends, and the his best friend is called ${gustavo.friend[0]}`);*/

const gustavo = {
    firstName: 'Gustavo',
    lastName: 'de Paula',
    birthYear: 1983,
    job: 'frontend',
    friend: ['Norberto', 'Tremendo', 'Pelé'],
    hasDriversLicense: true,
    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }
    // calcAge: function () {
    //     return 2037 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no '} driver's license`
    }
};


console.log(gustavo.calcAge());

console.log(gustavo.age);
console.log(gustavo.age);
console.log(gustavo.age);

// Challenge
// "Gustavo is a 54-year old frontend, and he has a driver's licence"
console.log(`${gustavo.firstName} is a ${gustavo.calcAge()}-year old ${gustavo.job} and he has ${gustavo.hasDriversLicense ? '' : 'not '}a driver's license`);
console.log(gustavo.getSummary());