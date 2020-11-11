'use strict';

/*
//Default Parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
*/

//How Passing Arguments Works: Value vs. Reference
const flight = 'LH1234';
const gustavo = {
  name: 'Gustavo de Paula',
  passport: 123456,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 123456) {
    alert('Check in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, gustavo);
// console.log(flight);
// console.log(gustavo);

// Is the same as doing...
// const flightNum = flight;
// const passenger = gustavo;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000000);
};

newPassport(gustavo);
checkIn(flight, gustavo);
