import React, { useState, useEffect } from 'react';
import './TicTacToe.css';
import { Constants, Players } from '../constants/Constants';
import Cell from '../components/Cell';
import { sleep } from '../util/helper';

function TicTacToe() {

  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [isPlayerTwoNext, setIsPlayerTwoNext] = useState(false);
  const [winner, setWinner] = useState(null);

  const playerOneFn = (row, cell) =>{
    if (isPlayerTwoNext) return;
    if (winner) return;
    board[row][cell] = Players?.PLAYER_ONE?.SYM;
    setBoard((board) => [...board]);
    checkWinner();
    sleep(1000);
    setIsPlayerTwoNext(true);
  }

  useEffect(() => {
    if (winner) return;
    if (isPlayerTwoNext) {
      playerTwoFn();
    }
  }, [isPlayerTwoNext]);

  const playerTwoFn = () => {
    if (winner) return;
    sleep(1000);
    const playerTwoMove = getPlayerTwoTurn();
    board[playerTwoMove.arrayIndex][playerTwoMove.index] = Players?.PLAYER_TWO?.SYM;
    setBoard((board) => [...board]);
    checkWinner();
    setIsPlayerTwoNext(false);
  }

  const getPlayerTwoTurn = () => {
    const emptyIndexes = [];
    board.forEach((row, arrayIndex) => {
      row.forEach((cell, index) => {
        if (cell === "") {
          emptyIndexes.push({ arrayIndex, index });
        }
      });
    });
    const randomIndex = Math.floor(Math.random() * emptyIndexes.length);
    return emptyIndexes[randomIndex];
  }

  const checkWinner = () => {
    // check same row
    for (let index = 0; index < board.length; index++) {
      const row = board[index];
      if (row.every((cell) => cell === Players?.PLAYER_TWO?.SYM)) {
        setWinner(Players?.PLAYER_TWO?.NAME);
        return;
      } else if (row.every((cell) => cell === Players?.PLAYER_ONE?.SYM)) {
        setWinner(Players?.PLAYER_ONE?.NAME);
        return;
      }
    }

    // check same column
    for (let i = 0; i < 3; i++) {
      const column = board.map((row) => row[i]);
      if (column.every((cell) => cell === Players?.PLAYER_TWO?.SYM)) {
        setWinner(Players?.PLAYER_TWO?.NAME);
        return;
      } else if (column.every((cell) => cell === Players?.PLAYER_ONE?.SYM)) {
        setWinner(Players?.PLAYER_ONE?.NAME);
        return;
      }
    }

    // check same diagonal
    const diagonal1 = [board[0][0], board[1][1], board[2][2]];
    const diagonal2 = [board[0][2], board[1][1], board[2][0]];
    if (diagonal1.every((cell) => cell === Players?.PLAYER_TWO?.SYM)) {
      setWinner(Players?.PLAYER_TWO?.NAME);
      return;
    } else if (diagonal1.every((cell) => cell === Players?.PLAYER_ONE?.SYM)) {
      setWinner(Players?.PLAYER_ONE?.NAME);
      return;
    } else if (diagonal2.every((cell) => cell === Players?.PLAYER_TWO?.SYM)) {
      setWinner(Players?.PLAYER_TWO?.NAME);
      return;
    } else if (diagonal2.every((cell) => cell === Players?.PLAYER_ONE?.SYM)) {
      setWinner(Players?.PLAYER_ONE?.NAME);
      return;
    } else if (board.flat().every((cell) => cell !== "")) {
      setWinner("draw");
      return;
    } else {
      setWinner(null);
      return;
    }
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

  //Play again
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
