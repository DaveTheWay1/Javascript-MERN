import React, {useState} from 'react';

const Form  = (props) => {
    const {toDoList, setToDolist} = props;
    const [toDo, setToDo] = useState({
        aToDo:'',
        toDoComplete:false
    });
    const changeHandler = (e) => {
        setToDo({toDo, [e.target.value]:e.target.name});
    };
    const submitHanlder = (e) => {
        e.preventDefault();
        setToDolist([...toDoList, toDo]);
        setToDo({
            aToDo:''
        });
    };
    return(
        <div>
            <form onSubmit={submitHanlder}>
                <label>Enter A To Do:</label>
                <input type="text" name='aToDo' value={toDo.aToDo} onChange={changeHandler}/>
                <button>Submit</button>
            </form>
        </div>
    );
};
export default Form;