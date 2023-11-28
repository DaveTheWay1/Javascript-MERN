import React, {useState} from 'react';

const Form = (props) => {
    const {toDoList, setToDoList} = props;
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
            aToDo:'',
        });
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Enter A To Do List Item:</label><br />
                    <input type="text" name='aToDo' value={toDo.aToDo} onChange={handleChange} />
                </div>
                <button>Add</button>
            </form>
        </div>
    );
};

export default Form;