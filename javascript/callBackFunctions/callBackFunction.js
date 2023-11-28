var exampleFunction = function(message){
    console.log( `parent function: ${message}` );
};
// exampleFunction( "Hello from exampleFunction" );

function parentFunction( callback ) {
    callback( "information from the parent function" );
}
parentFunction( exampleFunction );

// * output: parent function: information from the parent function

// You define a function named exampleFunction 
// that takes a message parameter and logs the 
// message to the console.

// You define another function named parentFunction 
// that takes a callback parameter. 
// This parentFunction is designed to execute the callback function 
// that is passed to it.

// You call parentFunction and pass exampleFunction as an argument. 
// This means that you are telling parentFunction to execute exampleFunction 
// as a callback.

// Inside parentFunction, it calls the callback function 
// with the argument "information from the parent function". 
// In this case, exampleFunction is the callback, 
// so it gets executed with the provided message.

// * CALL BACK FUNCTIONS ARE MOSTLY USED ANONYMOUS FUNCTIONS

// TODO: PREACTICE

const multiply = function(num){
    console.log(3 * num);
}
function providedNum( callback ){
    callback(3);
}
providedNum(multiply);
// output: 9

const color = function(color){
    console.log(`${color}`);
}

function provideColor(callback){
    callback('red');
}
provideColor(color);
// output: red