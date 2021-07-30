import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [bmi, setBmi] = useState(0)
  let condition = '___'
  const validInput = !isNaN(height) && !isNaN(weight);
  const error = validInput ? null : 'Please enter a number';
  
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
    setBmi((weight/(height*height)).toFixed(2))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <h1>BMI Calculator</h1>
      <form onSubmit={calculate}>
        <div>
      <label>Height (m): <input type='number' step='0.01' placeholder='1.69' onChange={handleChangeHeight} /></label>
        </div>
        <div>
      <label>Weight (kg): <input type='number' onChange={handleChangeWeight} /></label>
        </div>
        <div style={{color: 'red'}}>
          {error}
        </div>
      <button disabled={Boolean(error)} type="submit">Calculate</button>
      </form>
      <p>BMI : <strong>{bmi}</strong> This is considered <em>{condition}</em></p>
      </header>
    </div>
  );
}

export default App;
