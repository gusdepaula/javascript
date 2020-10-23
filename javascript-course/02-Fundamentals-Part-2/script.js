'use strict';
/*
let hasDriversLicense = true;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;

function logger() {
    console.log('My name is Gustavo');
}

// calling, running or invoking the function
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges}.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// function declaration
function calcAge1(birthYear) {
    const age = 2037 - birthYear;
    return age;
}
const gustavoAge = calcAge1(1983);

// function expression
const calcAge2 = function (birthYear) {
    return 2037 - birthYear
}
const gustavoAge2 = calcAge2(1983);

console.log(gustavoAge, gustavoAge2);


// arrow function
const calcAge3 = birthYear => 2037 - birthYear;
const gustavoAge3 = calcAge3(1983);
console.log(gustavoAge3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}
console.log(yearsUntilRetirement(1983, 'Gustavo'));
*/
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));
