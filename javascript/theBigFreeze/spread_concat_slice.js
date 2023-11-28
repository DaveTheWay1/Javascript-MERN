// * Spread, Concat, and Slice

// ? Let's say we have an immutable list of groceries...
const groceryList = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);

// * If we decide that we need to add an item to the list 
// * we can use spread to make a copy of the list 
// * and add an item to it
const needThyme = [ ...groceryList, { "item": "thyme", "haveIngredient": false } ];

console.log(needThyme);
// * output:
[
    { item: 'carrots', haveIngredient: false },
    { item: 'onions', haveIngredient: true },
    { item: 'celery', haveIngredient: false },
    { item: 'cremini mushrooms', haveIngredient: false },
    { item: 'butter', haveIngredient: true },
    { item: 'thyme', haveIngredient: false }
]
// * We can also use .concat()
// Concat is a method that essentially takes two arrays, 
// glues them together and gives us back the new array.
const groceryList2 = Object.freeze([
    { "item": "carrots",           "haveIngredient": false },
    { "item": "onions",            "haveIngredient": true  },
    { "item": "celery",            "haveIngredient": false },
    { "item": "cremini mushrooms", "haveIngredient": false },
    { "item": "butter",            "haveIngredient": true  }
]);
const needThyme2 = groceryList2.concat( [ { "item": "thyme", "haveIngredient": false } ] );

console.log(needThyme2);
// * output: 
[
    { item: 'carrots', haveIngredient: false },
    { item: 'onions', haveIngredient: true },
    { item: 'celery', haveIngredient: false },
    { item: 'cremini mushrooms', haveIngredient: false },
    { item: 'butter', haveIngredient: true },
    { item: 'thyme', haveIngredient: false }
]

// ? what if we already have "thyme" 
// ? and we want to set the "haveIngredient" to true
const needThyme3 = Object.freeze([
    { item: 'carrots', haveIngredient: false },
    { item: 'onions', haveIngredient: true },
    { item: 'celery', haveIngredient: false },
    { item: 'cremini mushrooms', haveIngredient: false },
    { item: 'butter', haveIngredient: true },
    { item: 'thyme', haveIngredient: false }
])

const gotTheThyme = [ ...needThyme3.slice(0, 5), { ...needThyme3[5], "haveIngredient": true } ];
console.log(gotTheThyme);
// * output
[
    { item: 'carrots', haveIngredient: false },
    { item: 'onions', haveIngredient: true },
    { item: 'celery', haveIngredient: false },
    { item: 'cremini mushrooms', haveIngredient: false },
    { item: 'butter', haveIngredient: true },
    { item: 'thyme', haveIngredient: true }
]
// ? if we want to remove an item, for exmaple, celery: 
// * we can use slice as well

const notNeceCelery = [ ...gotTheThyme.slice(0, 2), ...gotTheThyme.slice(3) ];
console.log(notNeceCelery);
// * output:
[
    { item: 'carrots', haveIngredient: false },
    { item: 'onions', haveIngredient: true },
    { item: 'cremini mushrooms', haveIngredient: false },
    { item: 'butter', haveIngredient: true },
    { item: 'thyme', haveIngredient: true }
]

// * ----------- the below is me testing my knowledge -------------
const closePeople = Object.freeze([
    {"name":"Gisselle", "relationship":"Girlfriend"},
    {"name":"Ricardo", "relationship":"Day 1"},
    {"name":"Maria Socorro", "relationship":"Mom"},
    {"name":"David Ramirez", "relationship":"Dad"},
    {"name":"Zaira", "relationship":"Sister"},
    {"name":"Mary", "relationship":"Sister"}
]);
const closePeopleAddition = [...closePeople, {"name":"Cazador", "relationship":"lovely first son"}, {"name":"Mow", "relationship":"ugly ass cat"}]
console.log(closePeopleAddition);

// ? what if you want to make a copy of an object
const objects = Object.freeze({
    "testing":"object"
})
// const objectCopy = {...object};
// console.log(objectCopy);
// output: { testing: 'object' }

// ? what about an addition to an object
const objectAddition = {...objects, "testing":"addition"};
console.log(objectAddition);
// output: { testing: 'addition' }

// ? what happened here
// * With arrays: 
// * Spreading creates a new array with a shallow copy 
// * of the elements from the original array. 
// * The original array remains unchanged, 
// * and the spread operation does not affect its elements.

// * With objects: 
// * Spreading creates a new object by merging the properties 
// * of the original object with the properties of the new object. 
// * If there are properties with the same name, 
// * the ones from the new object will replace those from the original object.

// * experiementing with concat
const closePeople1 = Object.freeze([
    {"name":"Gisselle", "relationship":"Girlfriend"},
    {"name":"Ricardo", "relationship":"Day 1"},
    {"name":"Maria Socorro", "relationship":"Mom"},
    {"name":"David Ramirez", "relationship":"Dad"},
    {"name":"Zaira", "relationship":"Sister"},
    {"name":"Mary", "relationship":"Sister"}
]);
const closePeopleAddition1 = closePeople1.concat([{"name":"Cazador", "relationship":"precious dog of mine woot"}])
console.log(closePeopleAddition1);

// ? would concact work on an object?

const objects1 = Object.freeze({
    "name":"concat"
});

const objectsAddition = objects1.concat({"name":"success"});
console.log(objectsAddition);
// ! concat does not seem to work ob objects

// * slice
// ? to make an edit
const closePeopleSlice = Object.freeze([
    {"name":"Gisselle", "relationship":"Girlfriend"},
    {"name":"Ricardo", "relationship":"Day 1"},
    {"name":"Maria Socorro", "relationship":"Mom"},
    {"name":"David Ramirez", "relationship":"Dad"},
    {"name":"Zaira", "relationship":"Sister"},
    {"name":"Mary", "relationship":"Sister"}
]);
// const sliceEdit = [...closePeopleSlice.slice(0,5), {...closePeopleSlice[1], "relationship":"bro"}]
// console.log(sliceEdit);
// if you do this:
// [
//     { name: 'Gisselle', relationship: 'Girlfriend' },
//     { name: 'Ricardo', relationship: 'Day 1' },
//     { name: 'Maria Socorro', relationship: 'Mom' },
//     { name: 'David Ramirez', relationship: 'Dad' },
//     { name: 'Zaira', relationship: 'Sister' },
//     { name: 'Ricardo', relationship: 'bro' }
// ]

// * OR

// const sliceEdit = [...closePeopleSlice.slice(0,1), {...closePeopleSlice[1], "relationship":"bro"}]
// console.log(sliceEdit);
// [
//     { name: 'Gisselle', relationship: 'Girlfriend' },
//     { name: 'Ricardo', relationship: 'bro' }
// ]

// * the way to edit one and still get all would be
const sliceEdit = [...closePeopleSlice.slice(0,1), {...closePeopleSlice[1], "relationship":"bro"}, ...closePeopleSlice.slice(3)]
console.log(sliceEdit);

// output
[
    { name: 'Gisselle', relationship: 'Girlfriend' },
    { name: 'Ricardo', relationship: 'bro' },
    { name: 'David Ramirez', relationship: 'Dad' },
    { name: 'Zaira', relationship: 'Sister' },
    { name: 'Mary', relationship: 'Sister' }
]


const closePeoplePractice = Object.freeze([
    {"name":"Gisselle", "relationship":"Girlfriend"},
    {"name":"Ricardo", "relationship":"Day 1"},
    {"name":"Maria Socorro", "relationship":"Mom"},
    {"name":"David Ramirez", "relationship":"Dad"},
    {"name":"Zaira", "relationship":"Sister"},
    {"name":"Mary", "relationship":"Sister"}
]);
// ? addings to the list of objects
const closePeoplePractice1 = [...closePeoplePractice, {"name":"Cazador", "relationship":"Son"} ];
console.log(closePeoplePractice1);

// ? using concact to add to a list of objects
const closePpplConcat = closePeoplePractice1.concat({"name":"mow", "relationship":"son"})
console.log(closePpplConcat);

// practicing the first method of adding to our list of objects
const closePplWCopy = [...closePeoplePractice, {"name": "agustina", "relationship":"daughter"}]
console.log(closePplWCopy);

// practice adding to our list of objects using concact
const closePpleConcat = closePeoplePractice.concat([{"name":"sol", "relationship":"son"}]);
console.log(closePpleConcat);

// ? edit using slicing 
const slicePractice = [...closePeoplePractice.slice(0,1), {...closePeoplePractice[1], "relationship":"bro"}, ...closePeoplePractice.slice(2)];
// * first chunk is where you want the list to stop (starts at 0 stops and does not include 1)
// * the second chunk is the edit (at 1, followed with the edit)
// * the last chunk is where you want to continue the list to present(starts at 2, but not including another number there is no ending so it just completes the rest)
console.log(slicePractice);

// ? removing/deteling an object from a list of objects 

const deleteRicardo = [...closePeoplePractice.slice(0,1), ...closePeoplePractice.slice(2)];
console.log(deleteRicardo);