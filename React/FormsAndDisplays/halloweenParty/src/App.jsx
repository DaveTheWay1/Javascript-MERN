import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

function App() {
  const [toDoList, setToDoList] = useState([]);
  
  return (
    <div className='App'>
      <h1>Get Ready For Your Halloween Party!</h1>
      <Form toDoList = {toDoList} setToDoList = {setToDoList} />
      <Display toDoList = {toDoList} setToDoList = {setToDoList} />
    </div>
  );
};

export default App;
