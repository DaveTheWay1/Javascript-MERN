import React, {useState} from 'react';
import './Display.css'

const Display = (props) => {
    const {toDoList, setToDoList} = props;
    
    const toggleHandle = (toDo) => {
        
        const updateToDoList = toDoList.map((myToDo) =>{
            if(myToDo === toDo){
                myToDo.toDoComplete = !myToDo.toDoComplete
            }
            return myToDo;
        });
        setToDoList(updateToDoList);
        };
    
    const deleteHandler = (toDo) => {
        const updatedToDoList = toDoList.filter((myToDo) => myToDo !== toDo);
        setToDoList(updatedToDoList)
    };
    return(
        <div>
        {
            toDoList.map((toDo,idx) => (
                <div key={idx}>
                    {
                        toDo.toDoComplete?
                        <p className='line-through'> {toDo.aToDo} </p>:
                        <p> {toDo.aToDo} </p>
                    }
                    <input type="checkbox" name='toDoComplete' checked={toDo.toDoComplete} onClick={() => toggleHandle(toDo)} />
                    <button onClick={() => deleteHandler(toDo)}>Delete</button>
                </div>
            ))
        }
        </div>
    );
};

export default Display;