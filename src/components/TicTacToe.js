import React, { useState } from 'react';
import './TicTacToe.css';
import { Constants } from '../constants/Constants';
import Cell from '../components/Cell';

function TicTacToe() {

  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [isCPUNext, setIsCPUNext] = useState(false);
  const [winner, setWinner] = useState(null);

  // display winner name
  const displayWinner = () => {

  }

  // display player name
  const displayTurn = () => {

  }

  const playerOneFn = () => {

  }

  //Play again
  const rePlayFn = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner(null);
    setIsCPUNext(false);
  }

  return (
    <div className="tictactoe">
      <div>{!winner && displayTurn()}</div>
      <div className="container">
        {
          board && board.map((row, j) => {
            return (<div key={j} className="col">
              {row.map((cell, i) => {
                return (<Cell key={i} rowIndex={j} cellIndex={i} cellValue={cell} playFn={playerOneFn} />)

              })
              }
            </div>)
          })
        }
      </div>
      <h2 data-testid="winner">{displayWinner()}</h2>
      <button className="replay_button" onClick={rePlayFn}>
        {Constants.REPLAY}
      </button>
    </div>
  );
}

export default TicTacToe;
