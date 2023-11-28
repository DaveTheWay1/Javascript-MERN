
// * NEST DESTRUCTURING
const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
    {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
    },
    {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
    }
    ],
    createdAt: 1543945177623
};

// * If we want the individual addresses as variables we could certainly destructure addresses, 
// * then destructure each address.

const { addresses: [whiteHouse, sherlock] } = person;

// * Note that a variable addresses is no longer created, 
// * but we can reference each address by the variable name listed at those positions.

// * What if we want to skip the first address and only want the city of the second, 
// * but using an alternate variable name?

const { addresses: [ , { city: london }] } = person;
console.log(london);
// output: London

// * Leaving an 'empty' first position (just a comma) allows skipping that index
// * and destructuring from the second address. 
// * This can be done to any depth, just be sure your content actually exists.

// * WE MUST REMEMBER THAT WE PUT WHAT WE WANT TO GET INTO
// const {OBJECT addresses: [ARRAY ,INDEX 1 {OBJECT citySPEFICIY:WHAT WE WANT TO CALL IT londonsWHAT IT"S BEING CALLED}CLOSING THE OBJECT ITS FOUND WITHIN ]CLOSING THE ARRAY THE OBJECT IS IN }CLOSING THE OBJECT THE ARRAY IS IN = personWHERE IT IS FOUND;

const persons = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
    {
        address: '1600 Pennsylvania Avenue',
        city: 'Washington, D.C.',
        zipcode: '20500',
    },
    {
        address: '221B Baker St.',
        city: 'London',
        zipcode: 'WC2N 5DU',
    }
    ],
    createdAt: 1543945177623
};
// ? let get the city of the first address

const { addresses: [{city:washington}]} = persons;
console.log(washington);
// output: Washington, D.C.

// ? let get the street of the first address
const {addresses: [{address:street}]} = persons;
console.log(street);

// ? let get the city of the second address

const {addresses: [,{city:londs}]} = persons;
console.log(londs);
// output: London
// ? let get the street of the second address

const {addresses: [,{address:strt}]} = persons;
console.log(strt);
// output:221B Baker St.