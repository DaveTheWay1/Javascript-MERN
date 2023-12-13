import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
//Remember, we can write these functional components in their own files 
    //to be exported and imported to the App component.
    //We've combined them here to simplify the example.
const Home = (props) => { 
  return (
    <div>
      <h1 style={{color: "red"}}>Home Component</h1>
      {/* <a href="/about">Go to About </a> */}
      <Link to="/about">Go to About</Link>
      
    </div>
  );
};
    // * a anchor tag or link.. when it comes to the two Link is best for when we use useEffect/State and etc, 
    // * a anchor refreshes and loses the date while Link does not referesh
const About = (props) => {
  return (
    <div>
      <h1 style={{color: "blue"}}>About Component</h1>
      {/* <a href="/">Go Home </a> */}
      <Link to="/">Go Home</Link>
    </div>
  );
}
    
function App() {
  return (
    <BrowserRouter>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
    
export default App
// ? BrowserRouter:

// BrowserRouter is a component that uses the HTML5 history API to keep the UI in sync
//  with the URL in the browser address bar. It provides the functionality required 
//  for declarative routing.
// This component should be used as a wrapper around your application to enable routing 
// capabilities.

// ? Routes:

// Routes is a component used within a BrowserRouter that defines 
// the mapping between the URL paths and the React components to 
// be rendered when a specific URL is matched.
// It helps in setting up the routes and associating components 
// to specific paths in your application.

// ? to use exact path or just exact?
    // looking at our route tags, one has path="" while the other has exact path = ""
    // why would this be necessary
        // * path is okay when its for exmaple path="/about" in our case and exacty path
        // * is for when we use only a forward slash as the path (exact path ="/") as a way
        // * to say you're not seeing that wrong we mean exactly the / as the path for this route