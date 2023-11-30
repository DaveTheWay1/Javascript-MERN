var exampleFunction = function(message){
    console.log( `parent function: ${message}` );
};
// exampleFunction( "Hello from exampleFunction" );

function parentFunction( callback ) {
    callback( "information from the parent function" );
}
parentFunction( exampleFunction );

// output:
// parent function: Hello from exampleFunction
// parent function: information from the parent function

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
// **
// exampleFunction is a function that takes a message parameter and logs a message to the console using that message.

// parentFunction is another function that takes a callback function as its parameter. Inside parentFunction, it calls the callback function and passes in the string "information from the parent function" as an argument.

// Finally, the parentFunction is invoked with exampleFunction as an argument, essentially passing exampleFunction as a callback to parentFunction.

// Here's the sequence of events:

// parentFunction is called and provided with exampleFunction as an argument.
// Inside parentFunction, the callback parameter now refers to exampleFunction.
// parentFunction calls exampleFunction (which is now referenced by callback) and passes the string "information from the parent function" as an argument.
// exampleFunction receives the string "information from the parent function" as message and logs it to the console using the line console.log( parent function: ${message} );.
// **                        //num is the argument from callback found in plugIn function
var visibleExample = function(num){
    console.log(`step 1, step 2: ${num}`);
};
                // visibleExample
function plugIn(callback){
    callback(', 3; i get plugged in');
};

plugIn(visibleExample);

// output:
// step 1, step 2: , 3; i get plugged in

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