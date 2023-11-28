import React, {useState} from 'react';

const Display = (props) => {
    const {toDoList, setToDoList} = props;
    
    const handleToggle = (toDo) => {
        const updatedToDoList = toDoList.map((myToDo) => {
            if(myToDo === toDo){
                myToDo.toDoComplete = !myToDo.toDoComplete
            }
            return myToDo;
        });
        setToDoList(updatedToDoList);
        };
    
    const handleDelete = (toDo) => {
        const updatedToDoList = toDoList.filter((myToDo) => myToDo != toDo);
        setToDoList(updatedToDoList);
    };
    return(
        <div>
            //* the code below is wrapped in curly braces bc we are using javascript logic
            {
                // * NOTICE: we are are using paranethesis instead of curly braces because we are return jsx elements
                // * rather than working with logic. opening at line 26 => ( and closing at line 36 ) 
                toDoList.map((toDo, idx) => (
                    <div key={idx} >
                        {
                            toDo.toDoComplete?
                            <p>{toDo.aToDo} Complete </p>:
                            <p>{toDo.aToDo} Incomplete </p>
                        }
                        <input type="checkbox" checked={toDo.toDoComplete} name='toDoComplete' onClick={() => handleToggle(toDo)} />
                        <button onClick={() => handleDelete(toDo)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
};
export default Display;