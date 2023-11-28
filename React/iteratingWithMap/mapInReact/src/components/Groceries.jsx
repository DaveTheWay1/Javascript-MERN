import React from 'react';

const Groceries = (props) => {
     // this could just as easily come from props
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    return (
        <div>
            <ul>
                {
                    groceryList.map( (item, index ) => 
                    <li key={index} > {item} </li>
                    )
                }
                {/* 
                In the map function, the first parameter of the callback function 
                is used to represent the current element of the array being processed, 
                and the second parameter represents the index of that element in the array. 
                */}
            </ul>
        </div>
    )
};

export default Groceries;