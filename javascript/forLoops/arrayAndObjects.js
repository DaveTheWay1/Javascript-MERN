console.log('   ');
console.log('Looping through array')
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

console.log('   ');
console.log('Looping through object')
console.log('   ');

const gisselle = {
    "name":"gisselle",
    "relationship":"girlfriend"
};

console.log('   ');
console.log('Looping using .hasOwnProperty')
console.log('   ');

// * there are two ways to loop through an object.
const loopGisselle = () => {
    for (let key in gisselle) {
        if (gisselle.hasOwnProperty(key)) {
            console.log(key + ": " + gisselle[key]);
        }
    }
}
loopGisselle();
// output:
// name: gisselle
// relationship: girlfriend

console.log('   ');
console.log('Looping using .hasOwnProperty Test')
console.log('   ');

const loopGisselleTest = () => {
    for (let status in gisselle) {
        if (gisselle.hasOwnProperty(status)) {
            console.log(gisselle[status]);
        }
    }
}
loopGisselleTest();
// output:
// gisselle
// girlfriend

console.log('   ');
console.log('Looping using Object.keys()')
console.log('   ');

// * OR
const loopGisselle2 = () => {
    const keys = Object.keys(gisselle);
    
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        console.log(key + ": " + gisselle[key]);
    }
}
loopGisselle2();
// output:
// name: gisselle
// relationship: girlfriend