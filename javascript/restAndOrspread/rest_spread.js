
// * Learning Rest and Spread
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];
// const [firstAnimal, secondAnimal] = animals;

// * If we want the remaining animals, use a rest pattern at the end of the assignment.

const [firstAnimal, secondAnimal, ...otherAnimals] = animals;

console.log(firstAnimal);
// * output: horse
console.log(secondAnimal);
// * output: dog
console.log(otherAnimals);
// * output: ['fish', 'cat', 'bird']

// ? Pretty neat. Can we do the same with objects?
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
const { firstName, lastName, ...attributes } = person;

console.log(firstName);
// * output: Bob
console.log(lastName);
// * output: Marley
console.log(attributes);
// * output: 
// *{
// *     email: 'bob@marley.com',
// *     password: 'sekureP@ssw0rd9',
// *     username: 'barley',
// *    addresses: [
// *    {
// *       address: '1600 Pennsylvania Avenue',
// *        city: 'Washington, D.C.',
// *        zipcode: '20500'
// *    },
// *    { address: '221B Baker St.', city: 'London', zipcode: 'WC2N 5DU' }
// *    ],
// *    createdAt: 1543945177623
// *} 
//  -----------------------------------------------------------------------
// * Using spread we can quickly make complete copies of objects or arrays.
// * below is important to note

const personCopy = { ...person };
personCopy === person
// => false
console.log(personCopy);
personCopy.addresses === person.addresses
// => true

// * something to know you can do
const personCopy2 = {...person, email:'crip'};
console.log(personCopy2);

// * the above makes a copy of person and changes the original email to crip