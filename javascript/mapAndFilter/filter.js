// ? Sometimes we want to get an array with only some of the values from the original array.
// * We do this by providing a callback function that returns either true or false for each element in the array.
// * If the function returns true, the filter method will add it to the new array that will be returned in the end.  
// * If we do not want the element in the new array, we return false.
const values = [1, 2, 3, 4, 5];
const evens = values.filter( val => val % 2 === 0 );
console.log(evens);

// output: [ 2, 4 ]

// * if we wanted the odds we could get them by changing the === to !==
const vals = [1, 2, 3, 4, 5];
const odds = vals.filter( crip => crip % 2 != 0 );
console.log(odds);
// output: [ 1, 3, 5 ]

// ? If we want only the groceries that have the letter "o" in them we could write...
const groceries = ["pearl onions", "cremini mushrooms", "thyme"];
const oFoods = groceries.filter( item => item.includes("o") );
console.log(oFoods);
// output: [ 'pearl onions', 'cremini mushrooms' ]

// * We can do anything we want with that callback function 
// * as long as it returns true or false. 
// * We can even chain filter and map together if we want to.

const valss = [1, 2, 3, 4, 5];
const oddCubes = valss.filter( val => val % 2 !==0 ).map( val => val**3 );
console.log(oddCubes);
// output: [ 1, 27, 125 ]
// This will filter out the even numbers and cube the ones that are left over. [1, 27, 125]



