import React, {useState} from 'react;'

const Display = (props) => {
    const {toDoList, setToDoList} = props;

    const toggleHandler = (toDo) => {
        const updatedToDoList = toDoList.map((myToDo) => {
            if(myToDo === toDo){
                myToDo.toDoComplete = !myToDo.toDoComplete
            };
            return myToDo;
        });
        setToDoList(updatedToDoList);
    };

    const deleteHandler = (toDo) => {
        const updatedToDoList = toDoList.filter((myToDo) => {myToDo !== toDo});
        setToDoList(updatedToDoList);
    }

    return(
        <div>
            {
                toDoList.map((toDo, idx) => {
                    <div key={idx}>
                        {
                            toDo.toDoComplete?
                            <p>{toDo.aToDo} Complete </p>:
                            <p>{toDo.aToDo} Incomplete</p>
                        }
                        <input type="checkbox" name='toDoComplete' id='toDoComplete' checked={toDo.toDoComplete} 
                        onClick={()=> toggleHandler(toDo)}/>
                        <button onClick={() => deleteHandler(toDo)}></button>
                    </div>
                })
            }
        </div>
    );
};

export default Display;