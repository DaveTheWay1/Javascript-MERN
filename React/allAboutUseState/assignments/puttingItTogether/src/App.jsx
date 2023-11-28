import PersonCard from './components/PersonCard'
import React from 'react'
import './App.css'

function App() {
  return (
    <div className='App'>
      <PersonCard firstName = {"Jane"} lastName = {"Doe"} age = {45} hair={"Black"} />
      <PersonCard firstName = {"John"} lastName = {"Smith"} age = {88} hair={"Brown"} />
    </div>
  )
};

export default App
