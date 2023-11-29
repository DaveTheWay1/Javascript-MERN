
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

const david = {
    Height: "6'1",
    Latino: true,
    Employed: true,
    age:24,
    closeFriends: [
        {
            girlfriend: "gisselle",
        },
        {
            bestFriends: "Ricardo, Pepe, Jaime, Juan"
        }

    ]
};

const {Height} = david;
console.log(Height);
const {closeFriends:[preciousPie, friends]} = david;
console.log(preciousPie);
// output: {girlfriend: 'gisselle'}
console.log(preciousPie.girlfriend);
// output: gisselle
console.log(preciousPie.girlfriend , friends.bestFriends);
// output: gisselle Ricardo, Pepe, Jaime, Juan

const davidCopy = {...david};
console.log(davidCopy);
// output:
// {
//     Height: "6'1",
//     Latino: true,
//     Employed: true,
//     age: 24,
//     closeFriends: [
//       { girlfriend: 'gisselle' },
//       { bestFriends: 'Ricardo, Pepe, Jaime, Juan' }
//     ]
//   }
const davidCopy2 = {...david, Employed: false};
console.log(davidCopy2);
// {
//     Height: "6'1",
//     Latino: true,
//     Employed: false,
//     age: 24,
//     closeFriends: [
//       { girlfriend: 'gisselle' },
//       { bestFriends: 'Ricardo, Pepe, Jaime, Juan' }
//     ]
//  }

// * IF YOU WANTED TO ADD TO OBJECT
const copyDavid = {...david, studious:true};
console.log(copyDavid);
// output:
// {
//     Height: "6'1",
//     Latino: true,
//     Employed: true,
//     age: 24,
//     closeFriends: [
//         { girlfriend: 'gisselle' },
//         { bestFriends: 'Ricardo, Pepe, Jaime, Juan' }
//     ],
//     studious: true
// }

// const { studious: true } = david;
// the above line of code would fail as a way to add because the line of code in javascript
// is used to set an object attribute that already exists to what's on the right of :
// in other words, as the way javascript works, the line of code is looking to store its value into 
// true so that when someone does console.log(true); it logs the value instead of what we intend which is
// to add the object attribute of studious with a value of true
// line 130 is the correct waya to go about it. created a const to contain a copy along with what you want to add
