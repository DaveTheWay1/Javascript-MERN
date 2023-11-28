import React, {useState} from 'react'

const Form = (props) => {
    // * below is the passed in getters and setters for our toDoList
    // * they're passed in as the props that they are.
    const {toDoList, setToDoList} = props

    // * we create a getter and setter for a toDo. 
    // * essentially to create a toDo (something on our todo list) and to set a toDo.
    // * within the useState and the object of what every toDo will have. being the 
    // * to do itself and whether the toDo is complete or not.
    const [toDo, setToDo] = useState({
        aToDo:'',
        toDoComplete:false
    });

    // * we create a changeHandler that will run whenevr implemented
    const changeHandler = (e) => {
        setToDo({toDo, [e.target.name]:e.target.value})
        // * the setter for our toDo item is set to our name and value grabbed from the input
    };

    // * a submitHanlder that will run when implented
    const submitHandler = (e) => {
        e.preventDefault();
        // * runs a preventDefault which prevents the default from occuring 
        // * because it's not what we want

        setToDoList([...toDoList, toDo])
        // * uses the setter to set to toDoList to all of what is already existing and adding the new toDo item.
        setToDo({
            aToDo:''
        })
        // * lastly, it uses the setter to use the aToDo to an empty string ready for a new input to be inserted.
    }

    return (
        <div>
            {/* the form, upon being submitted (onSubmit) will run the submit handler */}
            <form className='show-form' onSubmit = {submitHandler}>
                <div>
                    <label>Enter A To Do:</label><br />
                    <input type="text" name="aToDo" id="aToDo" onChange={changeHandler} value={toDo.aToDo}/>
                    {/* a type text bc we want text to be insert */}
                    {/* a name so it knows which of the toDo properties is being interacted with. in this case aToDO */}
                    {/* also, the name is important because of what happens onChange, which implements the changeHandler.
                    in that change handler is sets the to do by using e.name.target.*/}
                    {/* the value is used for that setter being mentioned on the onChange in changeHandler as well. */}
                    {/* essentially, uses the name to connect to what the value is being set to.*/}
                </div>
                <button className='add-button'>Add</button>
                {/* finally, the add button which submits and triggers the submit handler */}
            </form>
        </div>
    )
}

export default Form;