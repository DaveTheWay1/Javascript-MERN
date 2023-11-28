import './App.css'
import PersonCard from './components/PersonCard'
function App() {
  return (
    <div className='App'>
      <PersonCard firstName = "David" lastName = "Ramirez" age = "24" hairColor = "Dark Brown Basically Black" />
      <PersonCard firstName = "Gisselle" lastName = "Bonilla-Amaya" age = "21" hairColor = "Black" />
      <PersonCard firstName = "Cazador" lastName = "Ramirez" age = "5" hairColor = "Tan and Black" />
      <PersonCard firstName = "Amaris" lastName = "Ramirez" age = "1" hairColor = "Really Dark Brown Basically Black But In The Sun Really Dark Brown" />
    </div>
  )
}

export default App
