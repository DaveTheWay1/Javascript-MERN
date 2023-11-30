// * Object.freeze()
// As we've seen before, when we declare a variable using const, 
// we are no longer able to set it equal to a different variable, 
// but if the variable is an array or object we're still able to modify 
// that object by pushing or popping values into or from it, or changing 
// values that are stored in it.

// arr but array to prevent name conflict
const array = [1,2,3,4];
array.push(300); // even though arr is declared with `const` we can still push new values into it 

// If we want to prevent even those sorts of changes, we can use Object.freeze() to give our array or object Immutability.

const arr = Object.freeze([1,2,3,4]);
arr.push(300); // we're no longer allowed to change `arr` because we made it an Object.freeze

const row = Object.freeze([1,2,3,9])
row.push(19);
console.log(row);
// as expected, this did not go through bc of the object.freeze