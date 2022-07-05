import React, { useState } from 'react';
import './TicTacToe.css';

function TicTacToe() {

  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  console.log('board',typeof(board[1][0]));

  const playerOneFn = () => {

  }

  return (
    <div className="tictactoe">
      <div className="container">
        <div className="col">
          <span role="cell" onClick={() => playerOneFn(0, 0)} className="cell">
            {board[0][0]}
          </span>
          <span role="cell" onClick={() => playerOneFn(0, 1)} className="cell">
            {board[0][1]}
          </span>
          <span role="cell" onClick={() => playerOneFn(0, 2)} className="cell">
            {board[0][2]}
          </span>
        </div>
        <div className="col">
          <span role="cell" onClick={() => playerOneFn(1, 0)} className="cell">
            {board[1][0]}
          </span>
          <span role="cell" onClick={() => playerOneFn(1, 1)} className="cell">
            {board[1][1]}
          </span>
          <span role="cell" onClick={() => playerOneFn(1, 2)} className="cell">
            {board[1][2]}
          </span>
        </div>
        <div className="col">
          <span role="cell" onClick={() => playerOneFn(2, 0)} className="cell">
            {board[2][0]}
          </span>
          <span role="cell" onClick={() => playerOneFn(2, 1)} className="cell">
            {board[2][1]}
          </span>
          <span role="cell" onClick={() => playerOneFn(2, 2)} className="cell">
            {board[2][2]}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TicTacToe;
