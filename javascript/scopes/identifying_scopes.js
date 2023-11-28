
console.log('   ');
console.log('beatles')
console.log('   ');
// ? Consider the following, can you identify the different scopes in the provided sample?
var beatles = ['Paul', 'George', 'John', 'Ringo'];
// * var beetles is GLOBAL scope bc it can be accessed anywhere
function printNames(names) {
// * function printNames() is GLOBAL because it can be called anywhere
    function actuallyPrintingNames() {
    // * function is LOCAL because it can  only be called within printNames
    for (var index = 0; index < names.length; index++) {
        var name = names[index];

    console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);


console.log('   ');
console.log('beatl')
console.log('   ');
// * NOT SCOPES BUT PRACTICE TO BETTER UNDERSTAND THE ABOVE

const beatl = ['Paul', 'George', 'John', 'Ringo'];
// beatles is identified outside of a function and therefore a global.
// if it were inside a function then it would be local IF IT WAS IDENTIFIED AS let RATHER THAN CONST
// let is blocked scoped while const is not meaning that if let were identified within a function
//  it'd stay within the function (blocked scope) while const can be indentified anywhere and be used
// anywhere within the file (NOT blocked scoped)
function printNames(names) {
    function actuallyPrintingNames() {
    for (let index = 0; index < names.length; index++) {
        const name = names[index];

    console.log(name + ' was found at index ' + index);
    }
}
actuallyPrintingNames();
}
printNames(beatl);

console.log('   ');
console.log('friendsList')
console.log('   ');

const friendsList = ['Cazador', 'Mow', 'Gisselle']

const printName = (name) => {
    const actuallyPrintingName = () => {
        for(let index = 0; index < name.length; index ++){
            const thisName = name[index];
            console.log(thisName + ' was found at index ' + index)
        }
    }
    actuallyPrintingName()
}
printName(friendsList);
// output:
// Cazador was found at index 0
// Mow was found at index 1
// Gisselle was found at index 2

const gisselle = {
    "name":"gisselle",
    "relationship":"girlfriend"
};
// console.log(gisselle);
// const loopingThroughObject = () => {
//     for (let index = 0; index < gisselle.length; index ++){
//         console.log(index);
//     }
// }
// loopingThroughObject();