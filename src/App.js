import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0)
  let condition = '___'
  
  if (bmi >= 25.00) {
    condition = 'Unhealty'
  } else if (bmi !== '__' && bmi !== 0.00){
    condition = 'Healthy'
  }
  
  function handleChangeHeight(e) {
    setHeight(parseFloat(e.target.value));
    // console.log(height);
  }
  function handleChangeWeight(e) {
    setWeight(parseFloat(e.target.value));
    // console.log(weight);
  }

  function calculate(e) {
    e.preventDefault();
    // console.log(height, weight)
    const formValid = !isNaN(height) && !isNaN(weight)
    if (!formValid) return
    setBmi((weight/(height*height)).toFixed(2))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1>BMI Calculator</h1>
      <form onSubmit={calculate}>
      <label>Height (m): <input onChange={handleChangeHeight} /></label>
      <label>Weight (kg): <input onChange={handleChangeWeight} /></label>
      <button type="submit">Calculate</button>
      </form>
      <p>BMI : <strong>{bmi}</strong> This is considered <em>{condition}</em></p>
      </header>
    </div>
  );
}

export default App;
