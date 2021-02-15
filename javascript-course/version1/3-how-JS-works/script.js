///////////////////////////////////////
// Lecture: Hoisting
/* 
// functions
calculateAge(1983);

function calculateAge(year) {
  console.log(new Date().getFullYear() - year);
}

// retirement(1983); // Uncaught TypeError: retirement is not a function
var retirement = function (year) {
  console.log(65 - (new Date().getFullYear() - year));
};

// variables
console.log(age); // undefined
var age = 37;
console.log(age);

function foo() {
  console.log(age);
  var age = 65;
  console.log(age);
}
foo(); // 65
console.log(age); // 23 */

///////////////////////////////////////
// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain

var a = "Hello!";
first();

function first() {
  var b = "Hi!";
  second();

  function second() {
    var c = "Hey!";
    third();
  }
}

function third() {
  var d = "John";
  //   console.log(c);
  console.log(a + d);
}

///////////////////////////////////////
// Lecture: The this keyword
