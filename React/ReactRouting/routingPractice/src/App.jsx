import React from 'react'; 
import {BrowserRouter, Link, Routes, Route, useParams} from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Number from './components/Number';
import Hello from './components/Hello';

function App() {
  return (
    <div>
      <BrowserRouter>
      <p>
        <Link to="/home">Home</Link>
      </p>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/numbers/:int" element={<Number />}/>
        <Route path="/:hello" element={<Hello />}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
