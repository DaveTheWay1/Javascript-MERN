// * objectFreeze()
const array = Object.freeze([1,2,3,4]);
array.push(300); 
// * we're no longer allowed to change `arr`
console.log(array);
// * output: throws you an error

const row = Object.freeze([1,2,3,9])
row.push(19);
console.log(row);
// as expected, this did not go through bc of the object.freeze