'use strict';

const Person = function(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear
    
    // Never do this
    // this.calcAge = function() {
    //     console.log(2037 - this.birthYear);
    // }


}

const gustavo = new Person('Gustavo', 1983);
console.log(gustavo);

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);
console.log(matilda, jack);

console.log(gustavo instanceof Person);

// Prototypes
Person.prototype.calcAge = function(){
    console.log(2037 - this.birthYear);
};

gustavo.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(gustavo.__proto__);
console.log(gustavo.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(gustavo));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Home Sapiens';
console.log(gustavo.species, matilda.species);

console.log(gustavo.hasOwnProperty('firstName'));
console.log(gustavo.hasOwnProperty('species'));

console.log(gustavo.__proto__);
console.log(gustavo.__proto__.__proto__);
console.log(gustavo.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 5, 6, 9, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function() {
    return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir( x => x + 1);

