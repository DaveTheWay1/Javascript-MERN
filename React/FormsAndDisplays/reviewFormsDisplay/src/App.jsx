import React, {useState} from 'react';
import Form from './components/Form';
import Display from './components/Display';
function App() {
  const [toDoList, setToDolist] = useState([]);
  return (
    <div>
    <h1>To Do List Review</h1>
    <Form toDoList={toDoList} setToDolist={setToDolist}/>
    <Display toDoList={toDoList} setToDolist={setToDolist}/>
    </div>
  );
};

export default App;
