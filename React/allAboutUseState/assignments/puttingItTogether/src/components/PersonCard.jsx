import React, { useState } from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hair} = props
    const [currentAge, setAge] = useState(age)
    const birthday = () => {
        // setAge(currentAge +1); this works BUT the below is more secure.
        setAge((previousAge) => previousAge+1);
        // * line 8 is more secure because it allows for the actual current value to be updated.
        // if we had setAge(currentAge +1);  twice with the intention of increasing the current value twice
        // it would fail 
        // BUT if we had setAge((previousAge) => previousAge+1); twice with that same intention it would NOT fail.
        // THOUGH not too common you would want to write it twice when you could just do +2 or etc.... its something
        // worth noting
    }
    return(
        <div>
            <h1> {lastName}, {firstName} </h1>
            <p> Age: {currentAge} </p>
            <p> Hair: {hair} </p>
            {/* <button onClick = {(events) => setAge(currentAge +1 )}>Happy Birthday!</button> */}
            <button onClick = {birthday}>Happy Birthday!</button>
        </div>
    )
};

export default PersonCard;