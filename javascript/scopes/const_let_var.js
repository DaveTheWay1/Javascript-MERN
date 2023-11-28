
// * let
// * allows for reassignment of our declared 
// * variables content and does not require a value upon declaration

// ex: 
let shoe; // Declaring a variable without assigning a value

// * const
// * must assign a value at creation 
// * and that value may not change for the life of the variable. 
// * It is immutable.

// ex: 
const shoeSize = 75; // Declaring a constant variable with an integer value

const favoriteColor = 'blue'; // Declaring a constant variable with a string value

const person = { name: 'John', age: 30 }; // Declaring a constant variable with an object value

// * var
function exampleVar() {
    console.log(foo); // Outputs: undefined (hoisting)
    var foo = 42; // Declaration and initialization
    console.log(foo); // Outputs: 42
    foo = 100; // Reassignment
    console.log(foo); // Outputs: 100
    }

// * However, it's generally recommended to use let instead of var for block-scoped variables, 
// * as it provides more predictable behavior and avoids some of the issues associated with var.

const beatles = ['Paul', 'George', 'John', 'Ringo'];
function actuallyPrintingNames(names) {
    let index = 0;
    let name;
    for (index; index < names.length; index++) {
    name = names[index];
    console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}
actuallyPrintingNames(beatles);

// * the above works as we have identified index and name outside of our for loop 
// * that means it can be used throughout the  entire local scope of the function actuallyPrintingNames

const theBeatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
    const name = names[index];

    console.log(name + ' was found at index ' + index);
    }
}
actuallyPrintingNames();
}
printNames(theBeatles);

// * the above is the same as the one above it, only difference is this shows
// * how to properly do so without identifying before th for loop
// * we use a const on line 52 because let only works inside it's scope
// * unlike const which can be used all throughout allowing the console.log() below to run

// --------------------------------------- in case the top doesnt make sense --------------------------

// * let

const logNums = (nums) => {
    for(let idx = 0; idx < nums.length; idx++){
        console.log(`the num is ${nums[idx]} at index ${idx}`);
    }
    console.log('final index', idx)
}
logNums([1,2,3,4])
// * the above will not work bc it is block scoped meaning it only works within its {}
// * and nothing outside.

// *
const logNumbs = (nums) => {
    for(var idx = 0; idx < nums.length; idx++){
        console.log(`the num is ${nums[idx]} at index ${idx}`);
    }
    console.log('final index', idx)
}
logNumbs([1,2,3,4])
// * on the other hand, if we were to use var instead of let, this would work
// * this works because  var is not block scoped

// * const

// ! CONST IS ALSO BLOCK SCOPED. IT WOULD WORK IN THIS CASE JUST LIKE LET

// ? function scope vs block scope
// * function scope is the entire function scope 
// * while block is within it's {} within the function scope
