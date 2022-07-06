import React, { useState } from 'react';
import './TicTacToe.css';
import { Constants, Players } from '../constants/Constants';
import Cell from '../components/Cell';

function TicTacToe() {

  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [isPlayerTwoNext, setIsPlayerTwoNext] = useState(false);
  const [winner, setWinner] = useState(null);

  const movePlay = (row, cell) => {
    if (winner) return;
    board[row][cell] = isPlayerTwoNext ? Players?.PLAYER_TWO?.SYM : Players?.PLAYER_ONE?.SYM;
    setBoard((board) => [...board]);
    checkWinner();
    setIsPlayerTwoNext(!isPlayerTwoNext);
  }

  // check winner
  const checkWinner = () => {
    // If winner found in row skip column and diagonal check 
    if (checkWinnerInSameRow()) {
      return;
    }
     // If winner found in column skip diagonal condition
    if (checkWinnerInSameColumn()) {
      return;
    }
    checkWinnerInSameDiagonal();
  }

  // check winner for same row
  const checkWinnerInSameRow = () => {
    for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
      const row = board[rowIndex];

      if (row.every((cell) => cell === Players?.PLAYER_TWO?.SYM)) {
        setWinner(Players?.PLAYER_TWO?.NAME);
        return true;
      } else if (row.every((cell) => cell === Players?.PLAYER_ONE?.SYM)) {
        setWinner(Players?.PLAYER_ONE?.NAME);
        return true;
      }
    }
    return false;
  }

  // check winner for same column
  const checkWinnerInSameColumn = () => {
    for (let cellIndex = 0; cellIndex < 3; cellIndex++) {
      const column = board.map((row) => row[cellIndex]);

      if (column.every((cell) => cell === Players?.PLAYER_TWO?.SYM)) {
        setWinner(Players?.PLAYER_TWO?.NAME);
        return true;
      } else if (column.every((cell) => cell === Players?.PLAYER_ONE?.SYM)) {
        setWinner(Players?.PLAYER_ONE?.NAME);
        return true;
      }
    }
    return false;
  }

  // check winner for same diagonal
  const checkWinnerInSameDiagonal = () => {
    const diagonal1 = [board[0][0], board[1][1], board[2][2]];
    const diagonal2 = [board[0][2], board[1][1], board[2][0]];
    if (diagonal1.every((cell) => cell === Players?.PLAYER_TWO?.SYM)) {
      setWinner(Players?.PLAYER_TWO?.NAME);
      return true;
    } else if (diagonal1.every((cell) => cell === Players?.PLAYER_ONE?.SYM)) {
      setWinner(Players?.PLAYER_ONE?.NAME);
      return true;
    } else if (diagonal2.every((cell) => cell === Players?.PLAYER_TWO?.SYM)) {
      setWinner(Players?.PLAYER_TWO?.NAME);
      return true;
    } else if (diagonal2.every((cell) => cell === Players?.PLAYER_ONE?.SYM)) {
      setWinner(Players?.PLAYER_ONE?.NAME);
      return true;
    } else if (board.flat().every((cell) => cell !== "")) {
      setWinner("draw");
      return true;
    }
    return false;
  }

  // display winner name
  const displayWinner = () => {
    if (winner === "draw") {
      return "It's a draw!";
    } else if (winner) {
      return `${winner} won!`;
    }
  }

  // display player name
  const displayTurn = () => {
    if (isPlayerTwoNext) {
      return "Player Two's turn";
    } else {
      return "Player One's turn";
    }
  }

  // Play again
  const rePlayFn = () => {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner(null);
    setIsPlayerTwoNext(false);
  }

  return (
    <div className="tictactoe">
      <div data-testid="turn-detail">{!winner && displayTurn()}</div>
      <div className="container">
        {
          board && board.map((row, j) => {
            return (<div key={j} className="col">
              {row.map((cell, i) => {
                return (<Cell key={i} rowIndex={j} cellIndex={i} cellValue={cell} playFn={movePlay} />)

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
