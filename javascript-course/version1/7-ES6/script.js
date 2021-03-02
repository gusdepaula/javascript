// Lecture: let and const
/* 
// ES5
var name5 = "Jane Smith";
var age5 = 23;
name5 = "Jane Miller";
console.log(name5);

// ES6
const name6 = "Jane Smith";
let age6 = 23;
name6 = "Jane Miller";
console.log(name6); 

// ES5
function driversLicence(passedTest) {
  if (passedTest) {
    var firstName = "John";
    var yearOfBirth = 1990;
  }
  console.log(
    firstName +
      " born in " +
      yearOfBirth +
      ", is now officially allowed to drive a car!"
  );
}

driversLicence(true);

// ES6
function driversLicence6(passedTest) {
  let firstName;
  const yearOfBirth = 1990;
  if (passedTest) {
    firstName = "John";
  }
  console.log(
    firstName +
      " born in " +
      yearOfBirth +
      ", is now officially allowed to drive a car!"
  );
}

driversLicence6(true);

var i = 23;

for (var i = 0; i < 5; i++) {
  console.log(i);
}

*/
///////////////////////////////////////////
// Lecture: Blocks and IIFEs
/* 
// ES6
{
  const a = 1;
  let b = 2;
  var c = 3;
}

// console.log(a + b);
console.log(c);

// ES5
(function () {
  var c = 3;
})();

// console.log(c);
 */
///////////////////////////////////////////
// Lecture: Strings in ES6/ES2015

let firstName = "Johhn";
let lastName = "Smith";
const yearOfBirth = 1990;
function calcAge(year) {
  return new Date().getFullYear() - year;
}

// ES5
console.log(
  "This is " +
    firstName +
    " " +
    lastName +
    ". He was born in " +
    yearOfBirth +
    ". Today, he is " +
    calcAge(yearOfBirth) +
    " years old."
);

// ES6
console.log(
  `This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(
    yearOfBirth
  )} years old.`
);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith("J"));
console.log(n.endsWith("th"));
console.log(n.includes("oh"));
console.log(`${n} `.repeat(5));
