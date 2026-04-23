import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './counterSlice';
import './App.css';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="app-container">
      <div className="card">
        <h1>Experiment–4.2</h1>
        <h3>Centralized State Management (Redux)</h3>
        
        <div className="counter-box">
          <h2>Count: {count}</h2>
        </div>

        <div className="button-group">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button className="reset-btn" onClick={() => dispatch(reset())}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;