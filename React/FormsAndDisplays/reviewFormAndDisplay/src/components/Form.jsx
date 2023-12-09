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
        setToDoList([...toDoList, toDo]);
        console.log(toDoList);
        console.log(toDo.aToDo);
        setToDo({
            aToDo:''
        });
    };

    return(
        <div>
            <form onSubmit={submitHandler}>
                <label>Enter a to do:</label><br />
                <input type="text" name='aToDo' id='aToDo' value={toDo.aToDo} onChange={changeHandler}/><br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Form;