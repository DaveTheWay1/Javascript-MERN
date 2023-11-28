import React, { useState } from 'react';
const BoxDisplay = (props) => {
    const {clrArray} = props;
    // the getting for the array is passed in and all that has been done to it up to this point remains
    return(
        <div>
            {
        clrArray.map((color, index) => (
            // we use the getter of the array to map throrugh the array
            // ultimately, as it maps through the array it takes in the color, which was typed in and submitted, and uses that to identify as the background color.
            // so for every color submitted, it gets placed there as the background color
            <div key={index} style={{ 
                display: "inline-block",
                margin: "10px",
                height: "50px", 
                width: "50px", 
                backgroundColor: color
                }}>
            </div>
        ))
        }
        </div>
    )
};
export default BoxDisplay;