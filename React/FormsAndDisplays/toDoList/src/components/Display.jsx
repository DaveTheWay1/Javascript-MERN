import React, { useState } from 'react';
import './Display.css'

const Display = (props) => {
    
    const {toDoList, setToDoList} = props;
    // * we pass in the getters and setters for our toDoList

    // * we create handle which will run when applied
    const toggleToDo = (toDo) => {
        // * it takes in a parameter
        const updatedToDoList = toDoList.map((myToDo) => {
            // * it's goal it to update the toDoList
            if(myToDo === toDo){
                // * if myToDo is the same is the toDo
                // * this happens because map is essentially looping. as it loops, 
                // * it check if the current item on the toDoList (temporarily myToDo) is equal to the toDo selected
                myToDo.toDoComplete = !myToDo.toDoComplete
                // * have it be set myToDo.toDoComplete to the opposite of what myToDo.toDoComplete currently is.
            };
            return myToDo
            // * returns the result
        });
        setToDoList(updatedToDoList)
        // * uses the setter of to do list to set it to the result of the updateToDoList function
    };

    // * we create a delete handler function
    const deleteHandler = (toDo) => {
        // * it takes in a parameter
        const updatedToDoList = toDoList.filter((myToDo) => myToDo !== toDo);
        // * it's goal is to update the toDoList. 
        // * it grabs the to do list and filters it. if my todo do not equal toDo
        // * as mentioned above, it does this succesfully because, like map, filter loops through the toDoList
        // * and temporarily sets what it's currently on to myToDo. the toDo is what has been selected.
        setToDoList(updatedToDoList);
        // * it uses the setter for the toDoList to set the to do list to the updatedToList result
    };

    return(
        <div className='container-aToDo'>
            {
                toDoList.map((toDo, idx) => (
                    <div className='flex-toDo' key={idx}>
                        {
                            toDo.toDoComplete?
                            <p className='line-through'>{toDo.aToDo}</p>:
                            <p>{toDo.aToDo}</p>
                        }
                        <input type="checkbox" name="toDoComplete" 
                        checked={toDo.toDoComplete} onClick={() => toggleToDo(toDo)}/>
                        <button className='delete-button' onClick={() => deleteHandler(toDo)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Display;