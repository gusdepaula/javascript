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
/*
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
*/

/*****************************
 * CODING CHALLENGE 1
 */

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Mark has a higher BMI than John.
4. Print a string to the console containing the variable from step 3. (Something like "Is Mark's BMI higher than John's? true"). 

GOOD LUCK 😀
*/
/*
var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;
console.log("Is Mark's BMI higher than John's? " + markHigherBMI);
*/

/*****************************************
 * If / else staments
 */
/*
var firstName = "John";
var civilStatus = "single";

if (civilStatus === "married") {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " will hopefully marry soon!");
}

var isMarried = true;
if (isMarried) {
  console.log(firstName + " is married");
} else {
  console.log(firstName + " will hopefully marry soon!");
}

var massMark = 78; // kg
var heightMark = 1.69; // meters

var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log("Mark's BMI higher than John's");
} else {
  console.log("John's BMI higher than Mark's");
}
*/

/*****************************************
 * Boolean logic
 */
/*
var firstName = "John";
var age = 20;

if (age < 13) {
  console.log(firstName + " is a boy.");
} else if (age >= 13 && age < 20) {
  console.log(firstName + " is a teenager.");
} else if (age >= 20 && age < 30) {
  console.log(firstName + " is a young man.");
} else {
  console.log(firstName + " is a man.");
}
*/

/*****************************************
 * The Ternary Operator and Switch Statements
 */
/* var firstName = "John";
var age = 16;

// Ternary Operator
age >= 18
  ? console.log(firstName + " drinks beer")
  : console.log(firstName + " drinks juice");

var drink = age >= 18 ? "beer" : "juice";
console.log(drink);

// if (age >= 18) {
//   var drink = "beer";
// } else {
//   var drink = "juice";
// }

// Switch Statement
var job = "teacher";
switch (job) {
  case "teacher":
  case "instructor":
    console.log(firstName + " teaches kids how to code");
    break;
  case "driver":
    console.log(firstName + " drives an Uber in Lisbon");
    break;
  case "designer":
    console.log(firstName + "designs beautiful websites");
    break;
  default:
    console.log(firstName + "does something else");
}

switch (true) {
  case age < 13:
    console.log(firstName + " is a boy.");
    break;
  case age >= 13 && age < 20:
    console.log(firstName + " is a teenager.");
    break;
  case age >= 20 && age < 30:
    console.log(firstName + " is a young man.");
    break;
  default:
    console.log(firstName + " is a man.");
} */

/*****************************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/* var height = 23;

if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable has NOT been defined");
}

// equality operators
if (height == "23") {
  console.log("The == operator does type coercion");
}
 */

/*****************************
 * CODING CHALLENGE 2
 */

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.

GOOD LUCK 😀
*/

/* var scoreJohn = (89 + 120 + 103) / 3;
var scoreMike = (116 + 94 + 123) / 3;
var scoreMary = (97 + 134 + 105) / 3;

console.log(scoreJohn, scoreMike, scoreMary);

if (scoreJohn > scoreMike && scoreJohn > scoreMary) {
  console.log("John's team wins with', " + scoreJohn + " points");
} else if (scoreJohn < scoreMike && scoreMike > scoreMary) {
  console.log("Mike's team wins with, " + scoreMike + " points");
} else if (scoreMary > scoreMike && scoreMary > scoreMike) {
  console.log("Mary's team wins with, " + scoreMary + " points");
} else {
  console.log("There is a draw");
} */

/*****************************************
 * Functions
 */
/* 
function calculateAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

var ageGustavo = calculateAge(1983);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageGustavo, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
  var age = calculateAge(year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstName + " retires in " + retirement + " years.");
  } else {
    console.log(firstName + " is already retired.");
  }
}

yearsUntilRetirement(1983, "Gustavo");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane"); */

/*****************************************
 * Functions Statements and Expression
 */

/* // Functions Declaration
// function whatDoYouDo(job, firstName) {}

// Functions Expression
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "teacher":
    case "instructor":
      return firstName + " teaches kids how to code";
    case "driver":
      return firstName + " drives an Uber in Lisbon";
    case "designer":
      return firstName + " designs beautiful websites";
    default:
      return firstName + " does something else";
  }
};

console.log(whatDoYouDo("teacher", "John"));
console.log(whatDoYouDo("designer", "Jane"));
console.log(whatDoYouDo("retired", "Mike")); */

/*****************************************
 * Arrays
 */

/* var names = ["John", "Mark", "Jane"];
var years = [1990, 1969, 1948];

console.log(names[0]);
console.log(names.length);

// Mutate array data
names[1] = "Ben";
names[names.length] = "Mary";
console.log(names);

// Different data types
var john = ["John", "Smith", 1990, "teacher", false];

john.push("blue");
john.unshift("Mr.");
console.log(john);

john.pop();
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));

var isDesigner =
  john.indexOf("designer") === -1
    ? "John is not a designer"
    : "John is a designer";
console.log(isDesigner); */

/*****************************
 * CODING CHALLENGE 3
 */

/*
John and his family went on a holiday and went to 3 different restaurants. The bills were $124, $48 and $268.

To tip the waiter a fair amount, John created a simple tip calculator (as a function). He likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

In the end, John would like to have 2 arrays:
1) Containing all three tips (one for each bill)
2) Containing all three final paid amounts (bill + tip).

(NOTE: To calculate 20% of a value, simply multiply it with 20/100 = 0.2)

GOOD LUCK 😀
*/

/* var bills = [124, 48, 268];

var tipCalculator = function (bill) {
  if (bill <= 50) {
    return bill * 0.2;
  } else if (bill >= 50 && bill < 200) {
    return bill * 0.15;
  } else {
    return bill * 0.1;
  }
};

var tips = [
  tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2]),
];

var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(tips); */

/*****************************
 * Objects and Properties
 */

// Object literal
/* var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
};

console.log(john.firstName);
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

john.job = "designer";
john["isMarried"] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.name = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane); */

/*****************************
 * Objects and Methods
 */

/* var john = {
  firstName: "John",
  lastName: "Smith",
  birthYear: 1990,
  family: ["Jane", "Mark", "Bob", "Emily"],
  job: "teacher",
  isMarried: false,
  calcAge: function () {
    this.age = new Date().getFullYear() - this.birthYear;
  },
};

// john.age = john.calcAge();
john.calcAge();
console.log(john); */

/*****************************
 * CODING CHALLENGE 4
 */

/*
Let's remember the first coding challenge where Mark and John compared their BMIs. Let's now implement the same functionality with objects and methods.
1. For each of them, create an object with properties for their full name, mass, and height
2. Then, add a method to each object to calculate the BMI. Save the BMI to the object and also return it from the method.
3. In the end, log to the console who has the highest BMI, together with the full name and the respective BMI. Don't forget they might have the same BMI.

Remember: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

GOOD LUCK 😀
*/

// var markHigherBMI = BMIMark > BMIJohn;
// console.log("Is Mark's BMI higher than John's? " + markHigherBMI);

var mark = {
  name: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

var john = {
  name: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / (this.height * this.height);
    return this.BMI;
  },
};

if (mark.calcBMI() > john.calcBMI()) {
  console.log(mark.name + "'s BMI higher than John's " + mark.BMI);
} else if (mark.calcBMI() === john.calcBMI()) {
  console.log("They have the same BMI");
} else {
  console.log(john.name + "'s BMI higher than Mark's " + john.BMI);
}
