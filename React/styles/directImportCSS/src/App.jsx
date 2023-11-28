import MyButton from './components/MyButtonComponent'
import './App.css'
function App() {

  return (
    <div className='App'>
      <MyButton>
      <p className='btnFont'>Click Me</p>
      </MyButton>
    </div>
  )
};

export default App;
//! One drawback of this approach is that styles are not encapsulated to the component. 
//! In other words, by importing this styles.css file, 
//! if we use the "button" class anywhere else in our application, 
//! these same styles will be applied, which may not be the desired outcome. 