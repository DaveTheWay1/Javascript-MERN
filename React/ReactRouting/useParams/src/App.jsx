// import React from "react";
// import {
//   BrowserRouter,
//   Link,
//   Routes,
//   Route
// } from "react-router-dom";
    
// const Location = (props) => {
//   return (
//     <h1>Location Component Loaded!</h1>
//   );
// }
    
// function App() {
//   return (
//     <BrowserRouter>
//       <p>
//         <Link to="/location/seattle">Seattle</Link>
//           | 
//         <Link to="/location/chicago">Chicago</Link>
//           | 
//         <Link to="/location/burbank">Burbank</Link>
//       </p>
//       <Routes>
//         <Route path="/location/:city" element={<Location />}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }
    
// export default App;

import React from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  useParams
} from "react-router-dom";
    
const Location = (props) => {
  const {city} = useParams();
  return (
    <h1>Welcome to {city}!</h1>
  );
}
    
function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/location/Seattle">Seattle</Link>
        | 
        <Link to="/location/Chicago">Chicago</Link>
        | 
        <Link to="/location/Burbank">Burbank</Link>
      </p>
      <Routes>
        <Route path="/location/:city" element={<Location />}/>
      </Routes>
    </BrowserRouter>
  );
}
    
export default App;

// ? what is the code above doing? 
//      we are using useParams to essentially, in this case, grab 
//      what is after the forward slash; in this case the city names
              // the {city}, and :city are not random. while picking the 
              // name yes but upon selecting it they all must match. or
              // else it'll fail
              