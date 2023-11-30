// *** SORTING
const items = Object.freeze(["carrots", "onions", "celery", "mushrooms", "butter", "thyme"]);

// ? items.sort(); // this will throw an error so how? 
const sortedItems = [...items].sort();
console.log(sortedItems);
// output:
// [ 'butter', 'carrots', 'celery', 'mushrooms', 'onions', 'thyme' ]

// ? Sorting gotcha!?
const numbers = [10, 5, 3, 12, 22, 8];
const sortedNumbers = [...numbers].sort()
console.log(sortedNumbers);
// this will return [10, 12, 22, 3, 5, 8 ]
// Sort works by converting the values 
// into strings before sorting
// * in other words, sorting naturally converts things into strings and then sorts

// * sorting objects
const sortingGroceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);
const sortedGroceries = [...sortingGroceryList].sort( (a, b) => (a.item > b.item) ? 1 : -1 );
console.log(sortedGroceries);
// output:
// [
//     { item: 'butter', haveIngredient: true },
//     { item: 'carrots', haveIngredient: false },
//     { item: 'celery', haveIngredient: false },
//     { item: 'cremini mushrooms', haveIngredient: false },
//     { item: 'onions', haveIngredient: true }
// ]

// ? what is happpening?
// * You define the sortingGroceryList array 
// * and freeze it using Object.freeze(). 
// * Freezing the array makes it immutable, 
// * so you cannot add, remove, 
// * or modify its elements after freezing.

// * You create a new array called sortedGroceries 
// * by spreading the elements of sortingGroceryList into it:
// * const sortedGroceries = [...sortingGroceryList];
// * This line creates a shallow copy of the sortingGroceryList array. 
// * The spread operator [...sortingGroceryList] copies 
// * all the objects within sortingGroceryList into a new array.

// * You use the sort() method on the sortedGroceries array to sort 
// * its elements based on the "item" property of each object. 
// * You provide a custom sorting function as an argument to sort(). 
// * The sorting function compares two objects (a and b) based on their 
// * "item" properties and returns a value that determines the order:
// * (a, b) => (a.item > b.item) ? 1 : -1
// * If a.item is greater than b.item, 
// * the sorting function returns 1, 
// * indicating that a should come after b.

// * If a.item is less than b.item, 
// * the sorting function returns -1, 
// * indicating that a should come before b.

// * If a.item and b.item are equal, 
// * the sorting function returns 0, 
// * indicating that their order should not change.

// In the context of the comparison function 
// (a, b) => (a.item > b.item) ? 1 : -1 used with the .sort() method:

// The function (a, b) => (a.item > b.item) ? 1 : -1 is indeed responsible 
// for determining the sorting order of elements in the array based on 
// the comparison of the "item" property of the objects a and b.

// When comparing two items a.item and b.item:

// If a.item is considered greater (comes later in lexicographical order) 
// than b.item, the function returns 1.
// If a.item is considered less (comes earlier in lexicographical order) 
// or equal to b.item, the function returns -1.
// In the context of the .sort() method:

// When the comparison function returns a positive number 
// (1 in this case), it indicates that a should come after b in the sorted array, 
// according to the sorting criteria.
// When the comparison function returns a negative number (-1 in this case),
//  it indicates that a should come before b in the sorted array, according 
// to the sorting criteria.
// Therefore, when using this comparison function with .sort():

// Returning 1 means that a is considered greater 
// (should come later in the sorted array).
// Returning -1 means that a is considered less 
// (should come earlier in the sorted array).
// This function is designed to sort the array 
// elements in ascending order based on the lexicographical 
// comparison of the "item" property values (a.item and b.item). 
// Any elements where a.item is considered greater than b.item will 
// be positioned later in the sorted array, and elements where a.item is 
// considered less or equal to b.item will be positioned earlier.