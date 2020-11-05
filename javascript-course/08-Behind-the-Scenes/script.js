'use strict';
/*

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  console.log(firstName);
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      //Creating NEW variable with same name as outer scope's variable
      const firstName = 'Norberto';

      // Reassinging outer scope's variable
      output = 'NEW OUTPUT';

      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Gustavo';
calcAge(1983);
// console.log(age);
// printAge();


// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Gustavo';
let job = 'fronted';
const year = 1983;

// Functions
console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(numProducts);
if (!numProducts) {
  deleteShoppingCard();
}

var numProducts = 10;

function deleteShoppingCard() {
  console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);


console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  //   console.log(this);
};

calcAge(1983);

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  //   console.log(this);
};

calcAgeArrow(1983);

const gustavo = {
  year: 1983,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};

gustavo.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = gustavo.calcAge;
matilda.calcAge();

const f = gustavo.calcAge;
f();


// var firstName = 'Matilda';

const gustavo = {
  firstName: 'Gustavo',
  year: 1983,
  calcAge: function () {
    // console.log(this);
    console.log(2037 - this.year);

    // Solution 1
    // const self = this; // self or that
    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1983 && self.year <= 1996);
    // };

    // Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1983 && this.year <= 1996);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

gustavo.greet();
gustavo.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
addArrow(2, 5, 8);
 */

let age = 35;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: 'Gustavo',
  age: 35,
};
const friend = me;
friend.age = 27;
console.log('Friend:', friend);
console.log('Me', me);
