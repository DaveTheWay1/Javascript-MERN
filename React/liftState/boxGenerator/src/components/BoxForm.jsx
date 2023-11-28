import React, { useState } from 'react';

const BoxForm = (props) => {
    const {clrArray, setClrArray} = props;
    // we identify the passed in getter and setter. this is so we don't have to type props.clrArray or props.setClrArray but simply by their name.
    const [color, setColor] = useState("")
    // we still identify our own getter and setters for the specific colors being added.
    const handleSubmit = (e) => {
        e.preventDefault();
        setClrArray ([...clrArray, color]);
        // we use the setter for the array to set all of what's already in the clrArray, even if it's currently none, along with the new current color.
        console.log(color);
        setColor("");
        // we use the setter for the color being currently added to an empty a string so it dissapears from the text box upon submitting
    }; 
    return(
        <div>
            <form onSubmit={handleSubmit} style={{ margin: "20px" }}>
                {/* upon submission, the handle submit function will run and all within it will run*/}
                <label>Choose A Color:</label><br />
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)}/><br/>
                {/* we set the input to the value of the getter for the color the setter is being set to ON CHANGE*/}
            </form>
        </div>
    )
};
export default BoxForm;