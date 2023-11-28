import React, { useState } from 'react';

const UseForm = (props) => {
    const [username, setUsername] = useState("");
    const [usernameError, setUsernameError] = useState("")
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("")
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [error, setError] = useState(false)

    const handleUsername = (e) => {
        setUsername(e.target.value);
        if(e.target.value.length < 1){
            setUsernameError('Please Enter Your First Name.');
            setError(true);
        }
        else {
            setUsernameError(''); // Clear the error message if input is valid
            setError(false);
        }
    };
    
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError('Please Enter An Email.');
            setError(true);
        }else if(e.target.value.length < 3){
            setEmailError('Please Enter A Valid Email')
        }
        else {
            setEmailError(''); // Clear the error message if input is valid
            setError(false);
        }
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setPasswordError('Please Enter A Password.')
            setError(true);
        }
        else {
            setPasswordError(''); // Clear the error message if input is valid
            setError(false);
        }
    };
    return(
        <div>
            <form onSubmit={(e) => e.preventDefault()} >
                <div>
                    {
                    usernameError?
                    <p> {usernameError} </p>:
                    ''
                    }
                    <label>First Name:</label>
                    <input type="text" value={username} onChange={ handleUsername } />
                </div>
                <div>
                    {
                    emailError?
                    <p> {emailError} </p>:
                    ''
                    }
                    <label>Email:</label>
                    <input type="text" value={email} onChange={ handleEmail } />
                </div>
                <div>
                    {
                    passwordError?
                    <p> {passwordError} </p>:
                    ''
                    }
                    <label>Password:</label>
                    <input type="text" value={password} onChange={ handlePassword } />
                </div>
                {
                    error?
                    <input type="submit" value={"Create User"} disabled/>:
                    <input type="submit" value={"Create User"} />
                }
            </form>
        </div>
    )
};


export default UseForm;