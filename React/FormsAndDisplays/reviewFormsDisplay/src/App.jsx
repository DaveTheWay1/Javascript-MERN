import React, {useState} from 'react';
import Form from './components/Form';

function App() {
  const [toDoList, setToDoList] = useState([]);
  return(
    <div>
      <Form toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
};

export default App;