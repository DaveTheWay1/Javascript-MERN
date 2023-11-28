import React, {useState} from 'react';

const Form = (props) => {
    const {toDoList, setToDoList} = props
    const [toDo, setToDo] = useState({
        aToDo:'',
        toDoComplete:false
    });
    const handleChange = (e) => {
        setToDo({toDo, [e.target.name]:e.target.value})
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setToDoList([...toDoList, toDo])
        setToDo({
            aToDo:''
        });
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Please enter a to do:</label>
                <input type="text" value={toDo.aToDo} name='aToDo' onChange={handleChange} />
                <button>Add</button>
            </form>
        </div>
    );
};

export default Form;