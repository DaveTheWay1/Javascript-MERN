import React, { Component } from 'react';

const btnStyle = {
    padding: '12px 15px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    background: 'linear-gradient(30deg, rebeccapurple, magenta)', 
    color: '#fff',
    border: 'none'
};

const MyButton = (props) => {
    return (
        <button style={btnStyle}>{ props.children }</button>
    );
}
    
export default MyButton;
//!  While this approach does a good job of encapsulating the styles to the specific component, 
//! it has the drawback that media queries can't be used for responsiveness 
//! and it doesn't support pseudo-classes. 
//! Further, note that property names which are hyphenated in standard CSS must be camel cased 
//! when used in objects like this. Also, all the values (including integers like 0) must be strings.