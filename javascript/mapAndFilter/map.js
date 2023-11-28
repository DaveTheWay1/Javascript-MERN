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
