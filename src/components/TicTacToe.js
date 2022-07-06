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

  const playerOneFn = () => {

  }

  const rePlayFn = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  }

  return (
    <div className="tictactoe">
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
      <button className="replay_button" onClick={rePlayFn}>
        {Constants.REPLAY}
      </button>
    </div>
  );
}

export default TicTacToe;
