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

const greeting = (person) => {
    const name = person ? person.name : "stranger";
    return `Howdy, ${name}`;
    };

  console.log(greeting({ name: "Alice" })); // "Howdy, Alice"
  console.log(greeting(null)); // "Howdy, stranger"

// Notice line 54? how we access the object attribute of name setting it to alice
// instead of just putting greeting(alice)
// this is because of line 50 making it so that what is being passed in require an object
// to have the attribute of name. bc line 50 has person.name aka i need a object (person) 
// that has(.) an attribute of (name)
// goes hand in hand a little with how null works. null doesnt have an attribute, and
// null means empty. without a proper value, an objcet with an attribute of name, it returns stranger
