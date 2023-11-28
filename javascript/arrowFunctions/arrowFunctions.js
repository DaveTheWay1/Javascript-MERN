
// * arrow functions

const sayBye = () => {}
// * in the above, the paranthesis is where the arguements get passed
// * the => is what would be "function"
// * {} is the block where the code to that function pertains

const creatingFunction = () => {

}

const sayHello = (name) => {
    console.log('Hello ' + name);
}
sayHello('david')
// * output: Hello david

const sayName = (name) => {
    console.log(name);
};
sayName('David')

// * Single parameters don't need parentheses 
// * and with the function body being a single statement we can remove the curly braces.

const sayHi = name => console.log(`Hi ${name}`);
sayHi('david')

const singleParamenter = single => console.log(`who is single? ${single}`);
singleParamenter('jimmy');

// ! Concise. More complex functions will need a more complete body ({}), 
// ! and multiple parameters will require parentheses.

// * Another benefit of utilizing arrow functions for simple expressions is 
// * implicit returns. Let's create a new example.
var square = function(n) {
    return n * n;
};

// * becomes..
const square = n => n * n;
console.log(square(4));
// output: 16

// * the difference between multiple parameters and single parameters is that multilple parameters requires
// * parantheses and the curly brackets you would see in a function. you can see it in the below:
const multipleParameter = (boyfriend,girlfriend) => {
    console.log(`${boyfriend} is the boyfriend of ${girlfriend}`)
}
multipleParameter('david','gisselle');
output: 
// david is the boyfriend of gisselle

// * while single parameters do not require parenthesis or curley brackets

const singleParamenters = boyfriend => console.log(`${boyfriend} is gisselle's boyfriend`);
singleParamenters('david');
// output: 
// david is gisselle's boyfriend

// ! Traditional functions require explicit returns, such as in the first square.

// longhand notation to return an object
// NOTE: first set of brackets are defining the function body
// and the second set of brackets are to create the object literal
const returnObjLonghand = () => {
    return { 
        firstName: 'John',
        lastName: 'Wick'
    }
}
console.log(returnObjLonghand());
// * output: { firstName: 'John', lastName: 'Wick' }


const returnGisselle = gisselle => {
    return {
        "name":gisselle
    }
};
console.log(returnGisselle('Gisselle'));

// * to do a return without saying return you do the below
/*
  * The example below wouldn't work because the 
  * brackets are interpreted as opening the body of the 
  * function rather than brackets to create an object literal 
  */
// const returnObj = () => { firstName: 'John', lastName: 'Wick' }

// surrounding the implicit return with parentheses solves the problem
const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

console.log(returnObjFixed())
// * output : { firstName: 'John', lastName: 'Wick' }

const returnGisselle1 = () => ({"name":"gisselle"});
console.log(returnGisselle1().name);
// output:gisselle

const returnDavid = david => ({"name":david});
console.log(returnDavid("david"));

// * in our earlier practice, we stated that when it comes to one parameter we 
// * do not need to have curly braces but in this case we want them because
// * we purplse want to return an object which, as we know, an object is created
// * within curly braces

const multiply = (num1, num2) => {
    return num1 * num2
}
// * since the above is completing one operation only
// * it can be written all in one line of code like so

const multiple = (num1, num2) => num1 * num2
// * we only just changed the name so that 
// * it won't mark it as red 
// * as we cant have the same function name twice on one file

// * sorry, thats confusing. basically single parameters dont need parenthesis, one operation doesnt need curly braces
