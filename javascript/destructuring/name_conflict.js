// * NAME CONFLICTS

const person = { 
    firstName: 'Bob', 
    lastName: 'Marley', 
    email: 'bob@marley.com', 
    password: 'sekureP@ssw0rd9', 
    username: 'barley', 
    createdAt: 1543945177623
};
const password = '12345';
const { password: hashedPassword } = person;
console.log(password);
// output: 12345
console.log(hashedPassword);
// output: sekureP@ssw0rd9

// * this works because even if we were to change to hashPassword instead of just password
// * it wouldn't give us exactly what we are looking for as, when it comes to objects, the names must
// * match. the above is a way around that and  through name conflicts.

// * If we wanted to change the password 
// New password
const newPassword = 'newPassword123';

// Changing the password in the person object
person.password = newPassword;

console.log(person.password); // Output: newPassword123

person.firstName = 'David';
console.log(person.firstName);
console.log(person);

person.username = 'd_vidrv1';
person.lastName = 'R';

console.log(person);
// output:
    // {
    //     firstName: 'David',
    //     lastName: 'R',
    //     email: 'bob@marley.com',
    //     password: 'newPassword123',
    //     username: 'd_vidrv1',
    //     createdAt: 1543945177623
    // }
// * IN FURTHER  DETAIL
// * Specifying the property name, password, will access the value of that property on our object. 
// * The colon : after the property name followed by your new variable redirects the value of password 
// * to be held in hashedPassword

const updatedPerson = {
    ...person,
    password: newPassword,
    firstName: 'David'
};
console.log('updated person')
console.log(updatedPerson);