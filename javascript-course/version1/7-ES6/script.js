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

/* let firstName = "Johhn";
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
console.log(`${n} `.repeat(5)); */

///////////////////////////////////////////
// Lecture: Arrow Functions: Basics
/* 
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function (el) {
  return new Date().getFullYear() - el;
});
console.log(ages5);

// ES6
let age6 = years.map((el) => new Date().getFullYear() - el);
console.log(age6);

age6 = years.map(
  (el, index) => `Age element ${index + 1}: ${new Date().getFullYear() - el}.`
);
console.log(age6);
 */

///////////////////////////////////////////
// Lecture: Arrow Functions: Lexical 'this' Keyword
/* 
// ES5
var box5 = {
  color: "green",
  position: 1,
  clickMe: function () {
    var self = this;
    document.querySelector(".green").addEventListener("click", function () {
      var str =
        "This is box number " + self.position + " and it is " + self.color;
      alert(str);
    });
  },
};

// box5.clickMe();

// ES6
const box6 = {
  color: "green",
  position: 1,
  clickMe: function () {
    document.querySelector(".green").addEventListener("click", () => {
      var str =
        "This is box number " + this.position + " and it is " + this.color;
      alert(str);
    });
  },
};

box6.clickMe();


function Person(name) {
  this.name = name;
}

// ES5
Person.prototype.myFriends5 = function (friends) {
  var arr = friends.map(
    function (el) {
      return this.name + " is friends with " + el;
    }.bind(this)
  );
  console.log(arr);
};

var friends = ["Bob", "Jane", "Mark"];
new Person("John").myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function (friends) {
  let arr = friends.map((el) => `${this.name} is friends with ${el}`);
  console.log(arr);
};

new Person("Mike").myFriends6(friends);
 */

///////////////////////////////////////////
// Lecture: Arrow Functions: Destructuring
/* 
// ES5
var jonh = ["John", 26];
// var name = john[0];
// var age = jonh[1];

// ES6
const [name, age] = ["John", 26];
console.log(name);
console.log(age);

const obj = {
  firstName: "Jonh",
  lastName: "Smith",
};

const { firstName, lastName } = obj;
console.log(firstName);
console.log(lastName);

const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age, retirement] = calcAgeRetirement(1990);
console.log(age);
console.log(retirement);
 */

///////////////////////////////////////////
// Lecture: Arrays in ES6/ES2015
/* 
const boxes = document.querySelectorAll(".box");

// ES5
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
  cur.style.backgroundColor = "dodgerblue";
});
console.log(boxesArr5);

// ES6
const boxesArr6 = Array.from(boxes);
boxesArr6.forEach((cur) => (cur.style.backgroundColor = "dodgerblue"));

// ES5
for (var i = 0; i < boxesArr5.length; i++) {
  if (boxesArr5[i].className === c) {
    continue;
  }
  boxesArr5[i].textContent = "I changed to blue!";
}

// ES6
for (const cur of boxesArr6) {
  if (cur.className.includes("blue")) {
    continue;
  }
  cur.textContent = "I changed to blue!";
}

// ES5
var ages = [12, 17, 8, 21, 14, 11];
var fullAge = ages.map(function (cur) {
  return cur >= 18;
});
console.log(fullAge);

console.log(fullAge.indexOf(true));
console.log(ages[fullAge.indexOf(true)]);

// ES6
console.log(ages.findIndex((cur) => cur >= 18));
console.log(ages.find((cur) => cur >= 18));
 */

///////////////////////////////////////////
// Lecture: The Spread Operator

/* function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(18, 30, 12, 21);
console.log(sum1);

// ES5
var ages = [18, 30, 12, 21];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

// ES6
const sum3 = addFourAges(...ages);
console.log(sum3);

const familySmith = ["John", "Jane", "Mark"];
const familyMiller = ["Mary", "Bob", "Ann"];
const bigFamily = [...familySmith, "Lily", ...familyMiller];
console.log(bigFamily);

const h = document.querySelector("h1");
const boxes = document.querySelectorAll(".box");
const all = [h, ...boxes];

Array.from(all).forEach((cur) => (cur.style.color = "purple")); */

///////////////////////////////////////////
// Loggi Chalenge
/* 
const fruits1 = ["Banana", "Apple", "Pineapple", "Watermelon"];
const fruits2 = [
  "Banana",
  "Orange",
  "Peach",
  "Melon",
  "Apple",
  "Pineapple",
  "Watermelon",
];

const allFruits = [...fruits1, ...fruits2];

const uniqueForEach = [];

// allFruits.forEach((item, index) => {
//   if (allFruits.indexOf(item) == index) {
//     uniqueForEach.push(item);
//   }
// });

allFruits.map((item, index) =>
  allFruits.indexOf(item) === index ? uniqueForEach.push(item) : -1
);

console.log(uniqueForEach); */

///////////////////////////////////////////
// Lecture: Rest Parameters
/* 
// ES5
function isFullAge5() {
  //   console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);
  argsArr.map(function (cur) {
    console.log(new Date().getFullYear() - cur >= 18);
  });
}

// isFullAge5(1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(...years) {
  years.map((cur) => console.log(new Date().getFullYear() - cur >= 18));
}

isFullAge6(1990, 1999, 1965);
isFullAge6(1990, 1999, 1965, 2016, 1987);
 

// ES5
function isFullAge5(limit) {
  var argsArr = Array.prototype.slice.call(arguments, 1);
  argsArr.map(function (cur) {
    console.log(new Date().getFullYear() - cur >= limit);
  });
}

isFullAge5(21, 1990, 1999, 1965);
// isFullAge5(1990, 1999, 1965, 2016, 1987);

// ES6
function isFullAge6(limit, ...years) {
  years.map((cur) => console.log(new Date().getFullYear() - limit >= 18));
}

isFullAge6(16, 1990, 1999, 1965);
*/

///////////////////////////////////////////
// Lecture: Default Parameters

// ES5
/* function SmithPerson(firstName, yearOfBirth, lastName, nationality) {
  lastName === undefined ? (lastName = "Smith") : (lastName = lastName);
  nationality === undefined
    ? (nationality = "american")
    : (nationality = nationality);
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}

// ES6
function SmithPerson(
  firstName,
  yearOfBirth,
  lastName = "Smith",
  nationality = "american"
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.nationality = nationality;
}
var john = new SmithPerson("John", 1990);
var emily = new SmithPerson("Emily", 1983, "Diaz", "spanish");
 */

///////////////////////////////////////////
// Lecture: Maps

/* const question = new Map();
question.set(
  "question",
  "What is the official name of the latest major Javascript version?"
);
question.set(1, "ES5");
question.set(2, "ES6");
question.set(3, "ES2015");
question.set(4, "ES7");
question.set("correct", 3);
question.set(true, "Correct answer 😀");
question.set(false, "Wrong, please try again!");

console.log(question.get("question"));
// console.log(question.size);

if (question.has(4)) {
  //   question.delete(4);
  //   console.log("Answer 4 is here");
}

// question.clear();

// question.forEach((value, key) =>
//   console.log(`this is ${key} and it's set to ${value}`)
// );

for (let [key, value] of question.entries()) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}

const ans = Number(prompt("Write the correct answer"));
console.log(question.get(ans === question.get("correct")));
 */

///////////////////////////////////////////
// Lecture: Classes
/* 
// ES5
var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var jonh5 = new Person5("John", 1990, "teacher");

// ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }

  static greeting() {
    console.log(`Hey there!`);
  }
}

const john6 = new Person6("John", 1990, "teacher");

Person6.greeting();
 */

///////////////////////////////////////////
// Lecture: Classes with subclasses
/* 
// ES5
var Person5 = function (name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person5.prototype.calculateAge = function () {
  var age = new Date().getFullYear() - this.yearOfBirth;
  console.log(age);
};

var Athlete5 = function (name, yearOfBirth, job, olympicGames, medals) {
  Person5.call(this, name, yearOfBirth, job);
  this.olympicGames = olympicGames;
  this.medals = medals;
};

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function () {
  this.medals++;
  console.log(this.medals);
};

var johnAthlete5 = new Athlete5("John", 1990, "swimmer", 3, 10);

johnAthlete5.calculateAge();
johnAthlete5.wonMedal();

// ES6
class Person6 {
  constructor(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
  }

  calculateAge() {
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
  }
}

class Athlete6 extends Person6 {
  constructor(name, yearOfBirth, job, olympicGames, medals) {
    super(name, yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
  }
  wonMedal() {
    this.medals++;
    console.log(this.medals);
  }
}

const johnAthlete6 = new Athlete6("John", 1990, "swimmer", 3, 10);
johnAthlete6.calculateAge();
johnAthlete6.wonMedal();
 */

// CODING CHALLENGE

/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class Element {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Park extends Element {
  constructor(name, buildYear, area, numTrees) {
    super(name, buildYear);
    this.area = area;
    this.numTrees = numTrees;
  }

  treeDensity() {
    const density = this.numTrees / this.area;
    console.log(
      `${this.name} has a tree density of ${Math.round(
        density
      )} trees per square km.`
    );
  }
}

class Street extends Element {
  constructor(name, buildYear, length, size = 3) {
    super(name, buildYear);
    this.length = length;
    this.size = size;
  }

  classifyStreet() {
    const classification = new Map();
    // tiny/small/normal/big/huge
    classification.set(1, "tiny");
    classification.set(2, "small");
    classification.set(3, "normal");
    classification.set(4, "big");
    classification.set(5, "huge");
    console.log(
      `${this.name}, build in ${this.buildYear}, is a ${classification.get(
        this.size
      )} street.`
    );
  }
}

const allParks = [
  new Park("Green Park", 1987, 0.2, 215),
  new Park("National Park", 1894, 2.9, 3541),
  new Park("Oak Park", 1953, 0.4, 949),
];

const allStreets = [
  new Street("Ocean Avenue", 1999, 1.1, 4),
  new Street("Evergreen Street", 2008, 2.7, 2),
  new Street("4th Street", 2015, 0.8),
  new Street("Sunset Boulevard", 1982, 2.5, 5),
];

function calc(arr) {
  const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

  return [sum, sum / arr.length];
}

function reportParks(p) {
  console.log("-----PARKS REPORT-----");

  // Density
  p.map((cur) => cur.treeDensity());

  // Avarage age
  const ages = p.map((cur) => new Date().getFullYear() - cur.buildYear);
  const [totalAge, avgAge] = calc(ages);
  console.log(
    `Our ${p.length} parks have an average of ${Math.round(avgAge)} years.`
  );

  // Which park has more than 1000 trees
  const i = p.map((cur) => cur.numTrees).findIndex((cur) => cur >= 1000);
  console.log(`${p[i].name} has more than 1000 trees`);
}

function reportStreets(s) {
  console.log("-----STREETS REPORT-----");

  // Total and average length of the town's streets
  const [totalLength, avgLength] = calc(s.map((el) => el.length));
  console.log(
    `Our ${s.length} streets have a total length of ${Math.round(
      totalLength
    )} km, with an avarage of ${Math.round(avgLength)} km.`
  );

  // CLassify sizes
  s.map((cur) => cur.classifyStreet());
}

reportParks(allParks);
reportStreets(allStreets);
