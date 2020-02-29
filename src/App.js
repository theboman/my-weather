import React from 'react';
import Weather from './components/Weather';

import './App.css';

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      ></link>

      <header className="App-header">
        <Weather />
      </header>
    </div>
  );
}

export default App;
