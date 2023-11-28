let x = 1;
let y = 2;
// * let z == 3;
// * SyntaxError: Unexpected token '=='

// * Trick question! 
// * This is one of the most common types of syntax errors: Unexpected token. 
// * If you look closely at z, we have a double equal sign. 
// * The parser threw an Unexpected token error because == is simply not expected after let z.

console.log(x+y);
console.log(y-z);
console.log(z*x);