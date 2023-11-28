
// * PREDICT THE  DESTRUCTURING

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars

console.log(randomCar)
// * output: Tesla - correct
console.log(otherRandomCar)
// * output: Mercedes - correct

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;

// console.log(name); 
// * output: Error.
// * what's happening on line 18 is that we are setting name to be referred to as otherName. 
// * In other words, otherName now stores 'Elon' - correct
// * when this occurs we can no longer use name to refer to 'Elon' -- youll get an error --- you must use otherName.
console.log(otherName);
// * output: Elon - correct

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet',
    password: '12345'
}
const { password } = person
// * output: 12345
// const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log('password:'+ password);
// * output: 12345 - correct
console.log('hashedpassword: ' + hashedPassword);
// * output: 12345 - wrong. correct output: undefined. 
// * ohhhh, i got this wrong because password is not a property that exist in the person object

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
// * output: 2 == 5 - wrong, though correct. 
// * though you got the numbers right, it does not display them. it displays: false
console.log(first == third);
// * output: 2 == 2 - again wrong, but correct
// * you got the numbers right, but it displays: true

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
// * output: value - correct
console.log(secondKey);
// * [1,5,1,8,3,3] - correct
console.log(secondKey[0]);
// * output: 1. this work but it is not up to standard. - correct
console.log(willThisWork);
// * output: error  - wrong. output is 5. 
// * i thought it'd be an error because it didn't destructure from last key working inward.
// * rather direct to one of the objects properties. but, it works. output: 5