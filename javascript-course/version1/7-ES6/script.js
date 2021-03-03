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