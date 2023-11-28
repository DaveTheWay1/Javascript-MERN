import { useState } from 'react'
import MovieForm from './components/MovieForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <MovieForm />
    </div>
  )
}

export default App
