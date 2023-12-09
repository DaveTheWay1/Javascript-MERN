import React, {useState} from 'react';

const Form = (props) => {
    const {toDoList, setToDoList} = props;

    const [toDo, setToDo] = useState({
        aToDo:'',
        toDoComplete:false
    });

    const changeHandler = (e) => {
        setToDo({toDo, [e.target.name]:e.target.value});
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setToDoList([toDoList, toDo]);
        setToDo({
            aToDo:''
        });
    };
    
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>Enter a to do:</label><br />
                <input type="text" name='aToDo' value={toDo.aToDo} id='aToDo' onChange={changeHandler} />
            </form>
        </div>
    );
};

export default Form;