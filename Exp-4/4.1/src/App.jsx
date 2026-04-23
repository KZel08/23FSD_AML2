import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import './App.css';

const DisplayComponent = () => {
  const { theme } = useContext(AppContext);
  return (
    <div className="consumer-box">
      <h3>Second Component (Consumer)</h3>
      <p>I am also tracking the global theme: <b>{theme.toUpperCase()}</b></p>
    </div>
  );
};

function App() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <div className={`app-container ${theme}`}>
      <div className="content-box">
        <h1>Experiment–4.1</h1>
        <h2>Global State Management (Context API)</h2>
        <p>Current State: <strong>{theme.toUpperCase()}</strong></p>
        
        <button className="toggle-btn" onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>

        <DisplayComponent />
      </div>
    </div>
  );
}

export default App;