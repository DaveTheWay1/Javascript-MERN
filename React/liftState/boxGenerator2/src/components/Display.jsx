import React, { useState } from 'react';

const Display = (props) => {
    const {colorBoxArray} = props;
    return(
        <div>
            {
                colorBoxArray.map((box,index) => (
                    <div key={index} style={{ 
                        display: "inline-block",
                        margin: "10px",
                        borderRadius:"100pc",
                        height: `${box.height}px`, 
                        width: `${box.width}px`, 
                        backgroundColor: box.color
                        }}>
                    </div>
                ))
            }
        </div>
    )
}
export default Display;