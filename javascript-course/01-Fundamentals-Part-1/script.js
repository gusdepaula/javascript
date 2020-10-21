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

*/
//Data 1
// let markMass = 78;
// let markHeight = 1.69;
// let johnMass = 92;
// let johnHeight = 1.95;

// const bmiMark = markMass / markHeight ** 2;
// const bmiJohn = johnMass / (johnHeight * johnHeight);

// console.log(`BMI Mark is ${bmiMark}`);
// console.log(`BMI John is ${bmiJohn}`);


//Data 2
let markMass = 95;
let markHeight = 1.88;
let johnMass = 85;
let johnHeight = 1.76;

const bmiMark = markMass / (markHeight * markHeight);
const bmiJohn = johnMass / johnHeight ** 2;

console.log(`BMI Mark 2 is ${bmiMark}`);
console.log(`BMI John 2 is ${bmiJohn}`);