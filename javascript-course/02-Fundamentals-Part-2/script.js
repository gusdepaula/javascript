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
        let tip = value * 0.15;
        return tip;
    } else {
        let tip = value * 0.2;
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

console.log(`${gustavo.firstName} has ${gustavo.friend.length} friends, and the his best friend is called ${gustavo.friend[0]}`);

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


/////////////////////////////////////////////////
Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height(Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI(the same method on both objects).Store the BMI value to a property, and also return it from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI.Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m
tall.


GOOD LUCK



const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        return this.mass / this.height ** 2
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        return this.mass / this.height ** 2
    }
}

if (john.calcBMI() > mark.calcBMI()) {
    console.log(`John's BMI (${john.calcBMI()}) is higher than Mark's BMI (${mark.calcBMI()})!`)
} else {
    console.log(`Mark's BMI (${mark.calcBMI()}) is higher than John's BMI (${john.calcBMI()})!`)
}

console.log(`${john.calcBMI() > mark.calcBMI() ? john.fullName : mark.fullName}'s BMI (${john.calcBMI() > mark.calcBMI() ? john.calcBMI() : mark.calcBMI()}) is higher than ${john.calcBMI() < mark.calcBMI() ? john.fullName : mark.fullName}'s BMI (${john.calcBMI() < mark.calcBMI() ? john.calcBMI() : mark.calcBMI()})`);


// console.log('Lifiting weights repetition 1');

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifiting weights repetition ${rep}`);
}


const gustavo = [
    'Gustavo',
    'de Paula',
    2037 - 1983,
    'frontend',
    ['Norberto', 'Tremendo', 'Pelé'],
    true
];

const types = [];

for (let index = 0; index < gustavo.length; index++) {
    // Reading from gustavo array
    console.log(gustavo[index], typeof gustavo[index]);

    // Filling types array
    //types[index] = typeof gustavo[index]
    types.push(typeof gustavo[index])
}

console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let index = 0; index < years.length; index++) {
    ages.push(2037 - years[index]);
}
console.log(ages);

//continue and break
console.log('--- ONLY STRINGS --- ')
for (let index = 0; index < gustavo.length; index++) {
    if (typeof gustavo[index] !== 'string') {
        continue;
    }
    console.log(gustavo[index], typeof gustavo[index]);
}

console.log('--- BREAK WITH NUMBER --- ')
for (let index = 0; index < gustavo.length; index++) {
    if (typeof gustavo[index] === 'number') {
        break;
    }
    console.log(gustavo[index], typeof gustavo[index]);
}


const gustavo = [
    'Gustavo',
    'de Paula',
    2037 - 1983,
    'frontend',
    ['Norberto', 'Tremendo', 'Pelé'],
    true
];

for (let index = gustavo.length - 1; index >= 0; index--) {
    console.log(index, gustavo[index]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------------------ Starting exercise ${exercise}`)

    for (let rep = 0; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifiting weight repetition ${rep}`);
    }
}


// for (let rep = 1; rep < 10; rep++) {
//     console.log(`Lifiting weight repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    //console.log(`WHILE: Lifiting weight repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log('Loop is about to end...')
    }
}

/////////////////////////////////////////////////
Coding Challenge #4

Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!

Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
tips and totals arrays

Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array

GOOD LUCK
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function calcTip(value) {
    if (value >= 50 && value <= 300) {
        let tip = value * 0.15;
        return tip;
    } else {
        let tip = value * 0.2;
        return tip;
    }
}

for (let index = 0; index < bills.length; index++) {
    //tips.push(calcTip(bills[index]));
    //totals.push(tips[index] + bills[index]);

    const tip = calcTip(bills[index]);
    tips.push(tip);
    totals.push(tip + bills[index]);
}

console.log(`Tips are: ${tips}`);
console.log(`Bills total are: ${totals}`)

const calcAverage = function (arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        // sum = sum + arr[index];
        sum += arr[index];
    }
    return sum / arr.length;
}

console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));