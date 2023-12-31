// * npm install axios

// * import axios from 'axios';
// * ...
// * axios.get('http://www.example.com').then(response=>{
// *    console.log(response);
// *})

// *This looks very similar to fetch. 
// *However, we can specify the type of the request directly using Axios, 
// *so there are no extra arguments required to specify a POST or GET request.

// *Let's talk about the useEffect hook again. 
// *When we make API calls, we will generally want to do it only when the component first renders. 
// *For example:

// *import React, { useEffect, useState } from 'react';
// *import axios from 'axios';
// *...
// *const someComponent = props => {
// *    Note the second argument is an empty array
// *    const [responseData, setResponseData] = useState(null);
// *    useEffect(()=>{
// *        axios.get('http://www.example.com')
// *            .then(response=>{setResponseData(response.data)})
// *    }, []);  // This empty array forces useEffect to render ONLY when the component first renders
// *    return(
// *        <div>
// *            {responseData}
// *        </div>
// *    )
// *}