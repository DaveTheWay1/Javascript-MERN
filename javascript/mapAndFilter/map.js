const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const groceryList = groceries.map( item => `<li>${item}</li>` );
console.log(groceryList);
// output:
// [
//     '<li>pearl onions</li>',
//     '<li>cremini mushrooms</li>',
//     '<li>thyme</li>'
// ]

// * we can also map and array of numbers

const values = [1, 2, 3, 4, 5];
const cubes = values.map( val => val**3 );
console.log(cubes);
// output:
// [ 1, 8, 27, 64, 125 ]

const multiplyBy3 = [1,2,3];
const multOf3 = multiplyBy3.map(val => val**3);
console.log(multOf3);
// [ 1, 8, 27 ]

const count = [1,2,3];
const nums = count.map( val => `counting:${val}`);
console.log(nums);
// output: [ 'counting:1', 'counting:2', 'counting:3' ]