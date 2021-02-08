/*****************************************
 * Vabriables and data types
 */

/*
var firstName = "Gustavo";
console.log(firstName);

var lastName = "de Paula";
var age = 37;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = "Frontend";
console.log(job);

// Variable naming rules
var _3years = 3;
var jonhMark = "Jonh and Mark";

*/

/*****************************************
 * Vabriables mutation and type coercion
 */

/*

var firstName = "Gustavo";
var age = 37;

console.log(firstName + " " + age);

// Type coercion
var job, isMarried;
job = "Frontend";
isMarried = true;

console.log(
  firstName +
    " is a " +
    age +
    " years old " +
    job +
    ". Is he married? " +
    isMarried
);

// Variable mutation
age = "thirty seven";
job = "driver";

console.log(
  firstName +
    " is a " +
    age +
    " years old " +
    job +
    ". Is he married? " +
    isMarried
);

var lastName = prompt("What is his lastname?");
console.log(firstName + " " + lastName);

*/

/*****************************************
 * Basic operators
 */
var year, yearGustavo, yearMark;
year = 2021;
ageGustavo = 37;
ageMark = 33;

// Math operators
yearGustavo = year - ageGustavo;
yearMark = year - ageMark;

console.log(yearGustavo);
console.log(year + 2);
console.log(year * 2);
console.log(year / 10);

// Logical operators
var gustavoOlder = ageGustavo > ageMark;
console.log(gustavoOlder);

// typeof operator
console.log(typeof gustavoOlder);
console.log(typeof ageGustavo);
console.log(typeof "Mark is older than Gustavo");
var x;
console.log(typeof x);
