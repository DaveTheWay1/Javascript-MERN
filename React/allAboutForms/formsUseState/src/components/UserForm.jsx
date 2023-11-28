import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    // * the useState("") portion sets it to an empty string ready for whatever string may be submitted
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { username, email, password };
        // * basically only stores what was just typed in until something new is submitted to then replace and take that place
        console.log("Welcome", newUser);
        setUsername("");
        setEmail("");
        setPassword("");
        // * are used to reset the state variables 
        // * username, email, and password 
        // * to empty strings after a user submits the form.
    };
    
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" value={username} onChange={ (e) => setUsername(e.target.value) } />
                {/* value is set to username which is to relate to username in the createUser function
                found within newUser's objects */}
                {/* what this does is actively show the typed input as the value*/}
                {/* lastly we have onChange event where we use the setter for username and and have it changed
                to that input. */}
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                {/* value is set to email which is to relate to username in the email function
                found within newUser's objects */}
            </div>
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                {/* value is set to password which is to relate to password in the createUser function
                found within newUser's objects */}
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;