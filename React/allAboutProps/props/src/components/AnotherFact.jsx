import React from 'react';

const AnotherFact = (props) => {
    const {age, iAm} = props
    return(
        <h2>Another fact about me is that I am {age} and I am {iAm} </h2>
    )
}
export default AnotherFact;