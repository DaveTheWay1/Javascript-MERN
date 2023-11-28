// Here we create the Header Component that will receive props and we know we want to have a user
//     first and last name
import React from 'react';

const Header = (props) => {
    // We can assume props looks like an object literal with 2 keys and values because of what was passed in
    // {
    //    "firstName":"Bill",
    //    "lastName":"Justice"
    // }
    // return(
        // <>
        // <h2>My name is {props.firstName} {props.lastName}</h2>
        // </>
        // );
        // * We could also simplify access to the values by destructuring our props into local variables this way:
        // destructuring props in to 2 local variables that MUST match the key names found in the props object
    const { firstName, lastName, dogName, age, iAm } = props; 
    return (
        <div>
            {/* Destructuring allows us to use them like simple variables */}
            <h1>Hi, my name is {firstName} {lastName} and my dog's name is {dogName}! </h1>
        </div>
    );
}

export default Header;