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
