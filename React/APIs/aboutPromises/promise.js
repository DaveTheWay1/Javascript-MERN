const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});
noMondays
    .then( res => console.log(res) )
    .catch( err => console.log(err) );


// BREAK DOWN

// const noMondays = new Promise( (resolve, reject) => {...}); 
//      This creates a new Promise called noMondays.

//      The Promise constructor takes a function with 
//      two parameters: resolve and reject. Inside this 
//      function, there's a check to see if the current 
//      day is not Monday (using new Date().getDay() !== 1).
//              0 sunday, 1 monday, 2 tuesday, 3 wednesday, 4 thursday,
//              5 friday, 6 saturday

// If the current day is not Monday:
//      The resolve function is called with the message 
//      "Good, it's not Monday!".

// If the current day is Monday:
//      The reject function is called with the message 
//      "Someone has a case of the Mondays!".

// noMondays.then( res => console.log(res) ).catch( err => console.log(err) );
        // while the above is the promise, line 33 is what calls it
//      .then() is a method used to handle the resolved 
//      value of a Promise.
//      .catch() is used to handle any errors or rejected 
//      cases in the Promise chain.