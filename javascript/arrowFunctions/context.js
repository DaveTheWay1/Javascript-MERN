
// * context to arrow functions
// * Fancy syntax isn't the only change with arrow functions. 
// * They also inherit context from the parent scope. 
// * To demonstrate this let's create a card Deck class.

class Deck {
    constructor() {
    const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
    const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = [];
    for (const suit of suits) {
        for (const face of faces) {
        deck.push(this.createCard(suit, face));
        }
    }
    this.deck = deck;
    }
    createCard(suit, face) {
    return face + " of " + suit;
    }
}
// * We'll start refactoring for a more functional approach using forEach, 
// * but continue using traditional anonymous functions.

class Deck {
    constructor() {
    const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
    const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    const deck = [];
    suits.forEach(function(suit) {
        faces.forEach(function(face) {
        deck.push(this.createCard(suit, face));
        });
    });
    this.deck = deck;
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }
}

// The reason the first version of the code doesn't work as expected is due to the use of regular functions 
// (function keyword) inside the forEach loops. 
// In JavaScript, regular functions have their own scope for the this keyword, 
// which can lead to unexpected behavior when you try to access this inside nested functions 
// like the ones inside your forEach loops.
// ----------------------------------------------
// Inside the inner forEach function, 
// this does not refer to the instance of the Deck class. Instead, 
// it refers to the execution context of the inner function. 
// This is why the this.createCard call doesn't work as expected.


// * Creating a new Deck will now result in a TypeError: 
// * TypeError: Cannot read property 'createCard' of undefined, 
// * because this in our anonymous functions don't have the same context as our loops.

// ? how do  we fix? like so... we include arrow functions
class Deck {
    constructor() {
        const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
        const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        const deck = [];
        suits.forEach(suit => {
        faces.forEach(face => {
        deck.push(this.createCard(suit, face));
        });
    });
    this.deck = deck;
    }
    createCard(suit, face) {
        return face + " of " + suit;
    }
}

//  * Arrow functions do not have their own this context; 
//  * instead, they inherit the this value from the enclosing scope 
//  * (in this case, the Deck class instance). So, when you use arrow functions, 
//  * this inside the arrow function still refers to the Deck instance, 
//  * allowing you to call this.createCard correctly.

// * to call, i first need to make an instance
const myDeck = new Deck
console.log(myDeck.deck)
output:
[
    'Ace of Diamond',  '2 of Diamond',    '3 of Diamond',
    '4 of Diamond',    '5 of Diamond',    '6 of Diamond',
    '7 of Diamond',    '8 of Diamond',    '9 of Diamond',
    '10 of Diamond',   'Jack of Diamond', 'Queen of Diamond',
    'King of Diamond', 'Ace of Heart',    '2 of Heart',
    '3 of Heart',      '4 of Heart',      '5 of Heart',
    '6 of Heart',      '7 of Heart',      '8 of Heart',
    '9 of Heart',      '10 of Heart',     'Jack of Heart',
    'Queen of Heart',  'King of Heart',   'Ace of Spade',
    '2 of Spade',      '3 of Spade',      '4 of Spade',
    '5 of Spade',      '6 of Spade',      '7 of Spade',
    '8 of Spade',      '9 of Spade',      '10 of Spade',
    'Jack of Spade',   'Queen of Spade',  'King of Spade',
    'Ace of Club',     '2 of Club',       '3 of Club',
    '4 of Club',       '5 of Club',       '6 of Club',
    '7 of Club',       '8 of Club',       '9 of Club',
    '10 of Club',      'Jack of Club',    'Queen of Club',
    'King of Club'
]

// * PRACTICE forEach

const friends = ['cazador','mow mow', 'augustina'];
const loopThrough = () =>{
    friends.forEach(friend => {
        console.log(friend);
    })
}
loopThrough(friends);

// * THIS breakdown
// In JavaScript, the this keyword refers to the current instance of an object. Its meaning depends on the context in which it's used. In your code snippet, this is used within the constructor of the Deck class. Let's break down what this is doing in this context:

// this in the constructor:
// In the constructor of the Deck class, this refers to the current instance of the Deck object that is being created when you instantiate the class. When you create a new Deck object like this: const myDeck = new Deck();, this inside the constructor will refer to myDeck.

// Using this to add properties to the instance:
// Inside the constructor, you're using this.deck to add a property called deck to the current instance of the Deck object. This property will hold an array of cards that are created in the constructor.

// Creating cards and adding them to the deck:
// You're using a forEach loop to iterate over the suits and faces arrays and create cards for each combination of suit and face using the this.createCard method. Within the createCard method, this still refers to the current instance of the Deck object, so you can access the deck property you added earlier using this.deck.

// Here's how this works in your code:

// this.deck is used to add a property deck to the instance of the Deck object being created.
// this.createCard(suit, face) is used to call the createCard method within the context of the current Deck instance, allowing you to access and manipulate its properties.
// In summary, this is used to access and modify properties and methods of the current instance of the Deck object being created, making it possible to work with instance-specific data and functionality.




