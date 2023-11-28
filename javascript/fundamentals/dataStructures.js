
// * Data Structures
arrays = [1,2,3,4,5,6]
objects = {}

// * both are used to store multiple pieces of data
// * you can store anything in them including arrays and objects

// ? if we wanted to print out the array
console.log(arrays);
// output: [ 1, 2, 3, 4, 5, 6 ]

// ? if we wanted to print out one specific from the array
console.log(arrays[0]);
// output: 1

// * object

let StudentMacy = {
    name: "Macy",
    role: "Student",
    age: 25
}
// ? if we wanted to console log the whole object?
console.log(StudentMacy);
// output: { name: 'Macy', role: 'Student', age: 25 }

// ? if we wanted to console log one specific?
console.log(StudentMacy["name"]);
// output: Macy

// * OR

console.log(StudentMacy.name);
// output: Macy

// * Complex Object

let employeeGisselle = 
{
    name: "Gisselle",
    role: "Inventory",
    age:21,
    isHuman:true,
    favHobbies:["Hanging with mow", "reading", "sleeping"],
    weekSchedule: {
        Monday:{
            morning:"class",
            afternoon:"home"
        },
        Tuesday:{
            morning: "work",
            afternoon: "home"
        },
        Wendesday:{
            morning: "school",
            afternoon: "home"
        },
        Thursday:{
            morning: "work",
            afternoon: "home"
        },
        Friday:{
            morning: "work",
            afternoon: "home"
        }
    }
}
// ? if we wanted to console log the object
console.log(employeeGisselle);
// output: you get the entire object as it is above

// ? if we wanted to get something within the list
console.log(employeeGisselle.favHobbies[0])
// output: hanging with mow

// ? if we wanted to get an object within the object containing objects
console.log(employeeGisselle.weekSchedule.Monday.morning)
// output:class
// * OR

console.log(employeeGisselle.weekSchedule["Friday"]["morning"])
// output: work
// * OR

console.log(employeeGisselle.weekSchedule.Friday["morning"])
// output: work

// * the last three above demonstrates that either or works