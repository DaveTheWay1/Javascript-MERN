// * Basic if statement

const cannotAfford = (itemPrice, accountBalance) => {
    if(accountBalance < itemPrice){
        return console.log(`you cannot afford this item. you only have ${accountBalance} in your account.`)
    }else{
        console.log('you can afford this item!');
    }
};

cannotAfford(50, 25)

// Ternary statement

const canAfford = (itemPrice, accountBalance) => {
    return itemPrice > accountBalance 
    ? console.log(`you cannot afford this item. you only have ${accountBalance} in your account.`)
    : console.log('you can afford this item!')
}

canAfford(24, 15)

// output: you cannot afford this item. you only have 15 in your account.

// * Special Note
// * Take care when nesting ternary statements, 
// * as they can tend to become unwieldy and unreadable. 
// * For instance, consider the following
const myVar = 10 < 20
    ? 5 < 10
        ? true
        : false
    : false

console.log(myVar); 
// output: true

const ternaryTest = () => {
    5 > 10
    ? console.log('? true')
    : console.log(': false');
};
ternaryTest();
// output: 
// : false
// * following the ? is where you have the result for true
// * following the : is where you have the result for false