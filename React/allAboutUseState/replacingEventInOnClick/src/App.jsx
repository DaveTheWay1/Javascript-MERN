import Counter from './assets/components/Counter'
import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <div>
        <h1> Total Counts: {count}</h1>
      </div>

      <Counter 
      updateCounter = {setCount}
      />
    </div>
  )
}

export default App
