import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    // JSX fragment <>...</> .... basically a div without "div" 
    // Helps with having more than one element.  like shown below:
    <>
    {/* <h1 class="my-class">This is JSX</h1> */}
    {/* in html, the above is correct. in JSX it is not */}
    <h1 className="my-class">This is JSX</h1>
    {/* when using JSX, not html, we use className instead of class */}
    <h2>Hello World!</h2>
    <p>This is a paragraph</p>
    <form action="/process" method="post">                
            <div className="form-group">     
                {/* we use htmlFor instead of for bc we are using jsx and not html
                and because of that fact we want jsx to know we want it to understand
                like html for and not jsx for. hence the below: */}
                <label htmlFor="email">Email:</label>                    
                <input type="text" id="email" name="username" className="form-control" />                
            </div>            
        </form>  
    </>
  )
}

export default App
