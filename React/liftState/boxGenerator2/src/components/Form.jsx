import React, { useState } from 'react';

const Form = (props) => {
    const {colorBoxArray, setColorBoxArray} = props;

    const [colorBox, setColorBox] = useState({
        color:'',
        width:0,
        height:0,
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        setColorBoxArray([...colorBoxArray, colorBox])
        setColorBox({
            color:'',
            width:0,
            height:0,
        });
    };
    const handleChange = (e) => {
        setColorBox({...colorBox, [e.target.name]:e.target.value });
        // * this seems to be used when we are working with an object of more than one property
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor='color'>Color:</label><br />
                <input type="text" name='color'  onChange={handleChange} value={colorBox.color} />
                </div>
                <div>
                    <label htmlFor='width'>Width:</label><br />
                    <input type="number" name='width' onChange={handleChange} value={colorBox.width}  />
                </div>
                <div>
                    <label htmlFor='height'>Height:</label><br />
                    <input type="number" name='height' onChange={handleChange} value={colorBox.height} />
                </div>
                <input type="submit" value={"Submit"} />
            </form>
        </div>
    )
};
export default Form;