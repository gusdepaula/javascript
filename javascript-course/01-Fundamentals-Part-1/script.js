/* let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

//Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

let country = "Brazil";
let continent = "South America";
let population = "209.000.000";

let javascriptIsFun = true;
console.log(`Javascript is fun? ${javascriptIsFun}`);

let isIsland = false;
console.log(`I live in ${country}. ${country} is located in ${continent} and have a population of ${population} millions of people. ${country} is a island? Answer: ${isIsland}`)


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'Programmer';
job = 'Teacher';

lastName = 'De Paula';
console.log(lastName);


// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Gustavo';
const lastName = 'de Paula';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const avaregeAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, avaregeAge);

//////////////////////////////////////
Coding challenge #1

Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height)(mass in kg and height in meter).
Your tasks:

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula(you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76
m tall.
GOOD LUCK


//Data 1
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

const bmiMark = markMass / markHeight ** 2;
const bmiJohn = johnMass / (johnHeight * johnHeight);

console.log(`BMI Mark is ${bmiMark}`);
console.log(`BMI John is ${bmiJohn}`);


//Data 2
let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;

const bmiMark = markMass / (markHeight * markHeight);
const bmiJohn = johnMass / johnHeight ** 2;

console.log(`BMI Mark 2 is ${bmiMark}`);
console.log(`BMI John 2 is ${bmiJohn}`);


const firstName = 'Gustavo';
const job = 'Frontend';
const birthYear = 1983;
const year = 2020;

const gustavo = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(gustavo);

const gustavoNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(gustavoNew);

console.log(`Just a regular string...`)

console.log('String with \n\
multiple \n\
lines');

console.log(`String
multiple
lines`)


const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`)
}

const birthYear = 2012;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);


///////////////////////////////////////////
Coding Challenge #2

Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

Your tasks:
1. Print a nice output to the console, saying who has the higher BMI.The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs.Example: "Mark's BMI(28.3) is higher than John's (23.9)!"

Hint: Use an if/else statement

GOOD LUCK


const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

const bmiMark = markMass / (markHeight * markHeight);
const bmiJohn = johnMass / johnHeight ** 2;

if (bmiMark > bmiJohn) {
    console.log(`Mark's BMI(${bmiMark}) is higher than John's(${bmiJohn})!`)
} else {
    console.log(`John's BMI(${bmiJohn}) is higher than Mark's(${bmiMark})!`)
}


//type conversion
const inputYear = '1991';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number('Gustavo'));

console.log(String(23));

//type coercion
console.log('I am ' + 23 + ' years old.')
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = '1' + 1;
n = n - 1;
console.log(n);

*/

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Gustavo"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

let height = 123;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

/*
const age = '18';
if (age === 18) console.log('You just became an adult (strict)');

if (age == 18) console.log('You just became an adult (loose)');

const favourite = prompt("What's your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if (favourite == 13) {
    console.log("Cool! 13 is an amazing number!");
} else if (favourite == 7) {
    console.log("7 is an amazing number!");
} else if (favourite == 9) {
    console.log("9 is an amazing number!");
} else {
    console.log("Number is not 13 or 7 or 9");
}

if (favourite !== 13) console.log('Why not 13?');


const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//     console.log('Sarah is able to drive!');
// } else {
//     console.log('Someone else should drive...')
// }

const isTired = true;
console.log(hasDriverLicense && hasGoodVision && isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive!');
} else {
    console.log('Someone else should drive...')
}


///////////////////////////////////////////
Coding Challenge #3

There are two gymnastics teams, Dolphins and Koalas.They compete against each other 3 times.The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well(draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points.Hint: Use a logical operator to test for minimum score, as well as multiple else -if blocks
4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points.Otherwise, no team wins the trophy

Test data:
§ Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
GOOD LUCK


//Data 1
// const scoreDolphins = (96 + 109 + 89)/3;
// const scoreKoalas = (88 + 91 + 110)/3;

//Data 2
// const scoreDolphins = (97 + 112 + 101)/3;
// const scoreKoalas = (109 + 95 + 123)/3;

//Data 3
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins >= 100 && scoreKoalas >= 100) {
    if (scoreDolphins > scoreKoalas) {
        console.log('Dolphins are win!');
    } else if (scoreKoalas > scoreDolphins) {
        console.log('Koalas are win!');
    } else if (scoreKoalas === scoreDolphins) {
        console.log("It's a draw competition!");
    }
} else {
    console.log('None of teams win!');
}


const day = 'Monday';

switch (day) {
    case 'Monday':
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'Tuesday':
        console.log('Prepare theory videos');
        break;
    case 'Wednesday':
    case 'Thursday':
        console.log('Write code examples');
        break;
    case 'Friday':
        console.log('Record videos');
        break;
    case 'Saturday':
    case 'Sunday':
        console.log('Enjou the weekend');
        break;
    default:
        break;
}

if (day == 'Monday') {
    console.log('Plan course structure');
    console.log('Go to coding meetup');
} else if (day == 'Tuesday') {
    console.log('Prepare theory videos');
} else if (day == 'Wednesday' || day == 'Thursday') {
    console.log('Write code examples');
} else if (day == 'Friday') {
    console.log('Record videos');
} else if (day == 'Saturday' || day == 'Sunday') {
    console.log('Enjou the weekend');
} else {
    console.log('Not a valid day!');
}


const age = 23;
age >= 18 ? console.log('I like to drink wine!') : console.log('I like to drink water!');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if (age => 18) {
    drink2 = 'wine'
} else {
    drink2 = 'water'
};
console.log(drink2);

console.log(`I like to drink ${drink}`);

///////////////////////////////////////////
Coding Challenge #3


Steven wants to build a very simple tip calculator for whenever he goes eating in a
restaurant.In his country, it's usual to tip 15% if the bill value is between 50 and
300. If the value is different, the tip is 20%.

Your tasks:
1. Calculate the tip, depending on the bill value.Create a variable called 'tip' for
this.It's not allowed to use an if/else statement (If it's easier for you, you can
start with an if/else statement, and then try to convert it to a ternary
operator!)
2. Print a string to the console containing the bill value, the tip, and the final value
    (bill + tip).Example: “The bill was 275, the tip was 41.25, and the total value
316.25”

Test data:
§ Data 1: Test for bill values 275, 40 and 430

Hints:
§ To calculate 20 % of a value, simply multiply it by 20 / 100 = 0.2
§ Value X is between 50 and 300, if it's >= 50 && <= 300
GOOD LUCK


// const billValue = 275;
// const billValue = 40;
const billValue = 430;

//let tips;
// if (billValue >= 50 && billValue <= 300) {
//     tips = billValue * 0.2;
// } else {
//     tips = billValue * 0.15;
// }

const tips = billValue >= 50 && billValue <= 300 ? billValue * 0.2 : billValue * 0.15;

console.log(`The bill was ${billValue}, the tip was ${tips}, and the total value ${billValue + tips}`);
*/
