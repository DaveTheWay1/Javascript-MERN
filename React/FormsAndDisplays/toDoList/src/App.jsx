import Form from './components/Form';
import Display from './components/Display';
import { useState } from 'react';
import './components/Display.css'

function App() {
  // * we create a useState getter and setter list representing a toDoList.
  // * a getter to get the toDoList and a setter to set (set/update) a toDoList
  const[toDoList, setToDoList] = useState([]);

  return (
    <div className="App">
      <h1>Get Ready For You Awesome Ze Possum Halloween Party!</h1>
      {/* we create a comonent for the form in which we will be creating a to do list */}
      {/* with that, we pass the getters and setters of the list that we introduced up top 
      so we can use in that component */}
      <Form toDoList={toDoList} setToDoList={setToDoList} />

      {/* we create a component to display our toDoList. we pass the getter for the to do list
      and the setter for our to do list so we can apply them to this component */}
      <Display toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;