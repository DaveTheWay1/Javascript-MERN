import { useState } from "react"
import Form from "./components/Form"
import Display from "./components/Display"

function App() {
  const [colorBoxArray, setColorBoxArray] = useState([])
  return (
    <div className="App">
      <h1>CREATE YOUR COLORFUL CIRCLE!</h1>
      <Form colorBoxArray={colorBoxArray} setColorBoxArray={setColorBoxArray} />
      <hr />
      <Display colorBoxArray={colorBoxArray} />
    </div>
  )
}

export default App
