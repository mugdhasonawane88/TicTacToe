import React from 'react';
import './App.css';
import { Constants } from './constants/Constants';
import TicTacToe  from './components/TicTacToe';


function App() {
  return (
    <div className="App">
    <header className="App-header">
      <h1>{Constants.HEADER}</h1>
      <TicTacToe />
    </header>
  </div>
  );
}

export default App;
