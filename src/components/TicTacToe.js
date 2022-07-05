import './App.css';
import { Constants } from './constants/Constants';

function TicTacToe() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{Constants.HEADER}</h1>
      </header>
    </div>
  );
}

export default TicTacToe;
