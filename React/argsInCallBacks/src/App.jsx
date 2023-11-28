import { useState } from "react"
import Form from "./components/Form"
import MyComponent from "./components/MyComponent"

function App() {
  const [movies, setMovies] = useState([]);
  return (
    <div className="App">
      <Form movies={movies} setMovies={setMovies} />
      <MyComponent movies={movies} />
    </div>
  )
}

export default App;