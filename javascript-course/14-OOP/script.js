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
