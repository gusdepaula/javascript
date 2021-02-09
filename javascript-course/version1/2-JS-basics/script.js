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
/*
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
*/

/*****************************************
 * Operator predecence
 */

var now = 2021;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var avarage = (ageJohn + ageMark) / 2;
console.log(avarage);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);
