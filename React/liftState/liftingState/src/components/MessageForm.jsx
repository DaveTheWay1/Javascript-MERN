import React, { useState } from 'react';

const MessageForm = ( props ) => {
    const [msg, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage( msg );
    };
    const handleChange = (e) => {
        setMessage(e.target.value);
    };
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Set Message</h1>
                <textarea cols="50" rows="4" placeholder='Enter your message here' onChange={handleChange} value={msg}></textarea>
                <br /><input type="submit" value={"Send Message"} />
            </form>
        </div>
    );
};
export default MessageForm;