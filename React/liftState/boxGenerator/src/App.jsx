import { useState } from "react";
import BoxForm from "./components/BoxForm";
import BoxDisplay from "./components/DisplayBox";

function App() {
  const [clrArray, setClrArray] = useState([]);
  // * a usestate is created to contain an array; it starts with an empty array.
  // * bc it is up here it is a local to all within the function app curly braces within mean it can be passed anywhere within the curly braces
  return (
    <div className='App'>
      <BoxForm clrArray = {clrArray} setClrArray = {setClrArray}/>
      {/* we pass in the getter and the setter as props into the box form. */}
      <BoxDisplay clrArray = {clrArray} />
      {/* we pass the getter as a prop in the box display */}
      {/* all that has been done in the box form file remains existing including everything that was done to the getter and setters of the array */}
      {/* SO, => on the box display file =>>>>>> */}
    </div>
  );
};

export default App;
