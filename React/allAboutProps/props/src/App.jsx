import './App.css'
import Header from './components/Header';
import AnotherFact from './components/AnotherFact';
import Test from './components/Test';
function App() {
  return (
    <div className="App">
      {/* passing in 2 attributes to the Header component through the default props object which will look like this: */}
      {
      //    "firstName":"Bill",
      //    "lastName":"Justice"
      }
      <Header firstName={ "David" } lastName={ "Ramirez-Vazquez" } dogName={"Cazador"}/>
      <AnotherFact age={24} iAm="Sensational" />
      <Test success={"Success"}/>
    </div>
  );
}
export default App;
{/* 
<SomeComponent someProp="test" someOtherProp={ 67 } /> // Valid. We can send normal strings, numbers need curly braces
<SomeComponent someProp={ "test" } someOtherProp={ 67 } /> // Valid. A String is still a Javascript expression
<SomeComponent someProp="test" someOtherProp=67 /> // Invalid. Numbers need curly braces 
*/}