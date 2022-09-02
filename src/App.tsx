import { useState } from 'react';
import './App.css';
import { Counter, OnCounterValueChanged } from './components/Counter';

function App() {
  const [counter, setCounter] = useState(20);

  const onCounterValueChanged: OnCounterValueChanged = (newValue) => {
    setCounter(newValue);
  };

  return (
    <div>
      <h1>Book Manager</h1>
      <Counter value={counter} onValueChanged={onCounterValueChanged} />
      <p>The current counter value is: {counter}</p>
    </div>
  );
}

export default App;
