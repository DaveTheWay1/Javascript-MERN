import React, { useState } from 'react';

const UserForm = (props) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const CreateUser = (event) => {
        event.preventDefault();

        const newUser = {username, email, password};
        console.log('Welcome,',newUser)
        setUsername("");
        setEmail("");
        setPassword("");
    }
    return (
        <div>
            <form onSubmit={CreateUser}>
                <div>
                    <label>Username:</label><br />
                    <input type="text" value={username}  onChange={ (event) => setUsername(event.target.value) }/>
                </div>
                <div>
                    <label>Email:</label><br />
                    <input type="text" value={email} onChange={ (event) => setEmail(event.target.value) } />
                </div>
                <div>
                    <label>Password:</label><br />
                    <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>
            
            <button>Submit</button>
            </form>
            <div>
                <br /><label>Username: {username}</label> 
                {/* upon doing this, when the user types an input for username it will also simultaneously appear here. */}
                {/* the same occurs for the below. this probably occurs because of the onChange event.
                RATHER than waiting for the onSubmit, it happens because on the onChange includinging the useState setters */}
                <br /><label>Email: {email}</label>
                <br /><label>Password: {password} </label>
            </div>
        </div>
    )
}
export default UserForm;