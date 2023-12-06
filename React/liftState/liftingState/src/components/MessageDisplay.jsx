import React, {useState} from 'react';

const MessageDisplay = (props) => {
    const {message} = props;
    return (
        <div>
            <h1>Current Message</h1>
            <pre>{message}</pre>
            {/* <pre> {props.message} </pre> */}
        </div>
    );
};

export default MessageDisplay;