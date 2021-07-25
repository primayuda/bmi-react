import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [height, setHeight] = useState(0);
  let [weight, setWeight] = useState(0);
  let tempBmi = weight/(height*height);
  let bmi = !isNaN(tempBmi) ? tempBmi.toFixed(2) : '__';
  let condition = '__'
  if (bmi >= 25.00) {
    condition = 'Unhealty'
  } else if (bmi !== '__'){
    condition = 'Healthy'
  }
  
  function handleChangeHeight(e) {
    setHeight(height = parseFloat(e.target.value));
    // console.log(height);
  }
  function handleChangeWeight(e) {
    setWeight(weight = parseFloat(e.target.value));
    // console.log(weight);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1>BMI Calculator</h1>
      <label>Height (m): <input onChange={handleChangeHeight} /></label>
      <label>Weight (kg): <input onChange={handleChangeWeight} /></label>
      
      <p>BMI : <strong>{bmi}</strong> This is considered <em>{condition}</em></p>
      </header>
    </div>
  );
}

export default App;
