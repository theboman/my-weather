import React from 'react';
import Weather from './components/Weather';
import GetShowWeather from './components/GetShowWeather';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Weather />
        <GetShowWeather />
      </header>
    </div>
  );
}

export default App;
