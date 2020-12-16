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

Person.hey = function() {
    console.log('Hey there!');
    console.log(this);
}

Person.hey();

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
///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀



const Car = function(make, speed) {
    this.make = make;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    console.log(this.speed + 10);
};

Car.prototype.brake = function(){
    console.log(this.speed - 5);
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();
*/
// class expression
// const PersonCl = class {}

/*// class declaration
class PersonCl {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }
    // Instance methods
    // Methods will be added to .prototype property
    calcAge() {
        console.log(2037 - this.birthYear);
    }

    greet() {
        console.log(`Hey ${this.fullName}`);
    }

    get age(){
        return 2037 - this.birthYear;
    }

    // Set a property that already exists
    set fullName(name) {
        console.log(name);
        if(name.includes(' ')) this._fullName = name;
         else 
            alert(`${name} is not a full name`);
    }

    get fullName() {
        return this._fullName;
    }

    // Static method
    static hey() {
        console.log('Hey there!');
        console.log(this);
    }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age);

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function(){
//     console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1965);

PersonCl.hey();

const account = {
    owner: 'gustavo',
    movements: [200, 530, 120, 300],

    get latest() {
        return this.movements.slice(-1).pop();
    },

    set latest(mov) {
        this.movements.push(mov);
    }

};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);


const PersonProto =  {
    calcAge() {
        console.log(2037 - this.birthYear);
    },

    init(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge(); */

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed;
    }

    
    accelerate(){
        this.speed + 10;
    };

    brake() {
        this.speed - 5;
    };

    get speedUS(){
        return this.speed / 1.6;
    }

    // Set a property that already exists
    set speedUS(speed) {
        return this._speed = speed * 1.6;
    }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
console.log(ford);
ford.speedUS = 50;
console.log(ford);