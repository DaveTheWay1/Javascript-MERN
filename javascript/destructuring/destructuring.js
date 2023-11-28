// * initial data structures
const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const {lastName} = person
console.log(lastName);
// output:Marley

// const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

// const getAnmial = (animals) => {
//     animals.forEach(animal =>{
//         const animal_here = animal
//         console.log(animal_here);
//         if (animal_here === 'dog'){
//             break;
//         }
//     });
// };
// getAnmial(animals);

// * the above code doesn't accept break or return for some reason, it doesnt stop at dog.
// * the below code does

const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const getAnimal = (animals) => {
    for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];
    console.log(animal);
    if (animal === 'dog') {
      break; // Stop the loop when 'dog' is encountered
    }
    }
};
getAnimal(animals);
// output: 
// horse
// dog
const selectedAnimal = (animals) => {
  for (let index = 0; index < animals.length; index++){
    console.log(animals[index])
    if (animals[index] === 'dog'){
      break;
    }
  }
};
selectedAnimal(animals)
// output: 
// horse
// dog

// * Assume we want email from person and the first animal as standalone variables.

const { email } = person;
// * we use curly backets because its coming from an object 
// * which is captured by curly brackets
const [firstAnimal] = animals;
// * we used [] bc its coming from an array which is contained by [] square brackets.
console.log(email);
// => bob@marley.com
console.log(firstAnimal);
// => horse

// * Let's expand our previous scenario. 
// * Now we want email and password from person and the first three strings from animals

// const { email, password } = person;
// output: bob@marley.com sekureP@assw0rd9
// const [firstAnimal, secondAnimal, thirdAnimal] = animals;
// output: horse, dog, fish