import  { useState } from "react";
import "./App.css";

function App() {
  //State for the current counter value
  const [count, setCount] = useState(0);

  //State for the maximum value the counter can reach
  const [maxValue, setMaxValue] = useState(10);

  //Function to handle incrementing the counter
  const handleIncrement = () => {
    if (count < maxValue) {
      setCount(count + 1);
    }
  };

  //Function to handle decrementing the counter
  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  //Function to handle changes in the maximum value input field
  const handleMaxValueChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0) {
      setMaxValue(newValue);
      //Ensure the counter value doesn't exceed the new maximum value
      if (count > newValue) {
        setCount(newValue);
      }
    }
  };

  //Function to reset the counter to the maximum value and set input field to 10
  const handleReset = () => {
    setCount(maxValue); //Reset the counter to the maxValue
    setMaxValue(10); //Set the input field value to 10
  };

  return (
    <>
      <h1>Globeia : React Counter App Task</h1>
      <h2>[{count}]</h2>
      <div>
        <button className="" onClick={handleIncrement}>
          +
        </button>
        <button onClick={handleDecrement}>-</button>
      </div>
      <div>
        <input
          type="number"
          value={maxValue}
          onChange={handleMaxValueChange}
          min="0"
          className="upperLimit"
        />
        <button className="upperLimit" onClick={handleReset}>
          Reset Upper Limit
        </button>
      </div>
    </>
  );
}

export default App;
