import React, { Component } from 'react';
import '../App.css'
// two dots before bc it 
const MyButton = (props) => {
    return (
        <button className="btn" >{ props.children }</button>
    );
}
    
export default MyButton;