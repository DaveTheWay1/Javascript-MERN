// * NORMAL
const nums = [1, 2, 3, 4, 5];

const newNums = [];

for(let i = 0; i < nums.length; i++) {
    newNums.push( nums[i] * 2 );
}

console.log( newNums ); 
// output: [2, 4, 6, 8, 10]


// * Let's see how we could accomplish the same work as above using 
// * the MAP method for arrays in JavaScript.

const numss = [1,2,3,4,5];

const newNumss = numss.map( (num) => {
    return num * 2;
});

console.log(newNumss);
// output: [ 2, 4, 6, 8, 10 ]

// * Another way to write this code is using a FUNCTION:

const nums3 = [1,2,3,4,5];

function double(num){
    return num * 2;
}

const newNums3 = nums3.map( double );

console.log( newNums3 );

// output: [ 2, 4, 6, 8, 10 ]