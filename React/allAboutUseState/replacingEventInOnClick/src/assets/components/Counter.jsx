import React from 'react';

const Counter = (props) => {
    const { updateCounter } = props

    const addToCounter = () => 
        updateCounter((previousCount) => previousCount + 1)
    const resetCounter = () => {
        updateCounter((previousCount) => previousCount * 0)
    } 
    return(
        <div>
            <button onClick={addToCounter}>Count +1</button>
            <button onClick={resetCounter}>Reset</button>
        </div>
    )
};

export default Counter;