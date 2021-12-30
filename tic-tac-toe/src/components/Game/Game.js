import React, { useState } from "react";

import { Board } from "../Board/Board";
import "./Game.css";

export const Game = () => {
  const [cellValues, setCellValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [turnValue, setTurnValue] = useState(0);
  const [toggleValues, setToggleValues] = useState([
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
    true,
  ]);
  const winningCombination = [];
  const onCellClicked = (cellIndex) => {
    if (toggleValues[cellIndex]) {
      const newCellValues = [...cellValues];
      const newTurnValue = turnValue + 1;
      const newToggleValues = [...toggleValues];

      newToggleValues[cellIndex] = !toggleValues[cellIndex];

      if (newTurnValue & 1) newCellValues[cellIndex] = "X";
      else newCellValues[cellIndex] = "O";

      for (let i = 0; i < 3; i++) {
        if (i === 0) {
          for (let i = 0; i < 9; i += 3) {
            if (
              newCellValues[i] &&
              newCellValues[i + 1] &&
              newCellValues[i + 2] &&
              newCellValues[i] === newCellValues[i + 1] &&
              newCellValues[i + 1] === newCellValues[i + 2]
            ) {
              console.log("GAME ENDED AND THE WINNER IS " + newCellValues[i]);
              break;
            }
          }
        } else if (i === 1) {
          for (let i = 0; i < 3; i++) {
            if (
              newCellValues[i] &&
              newCellValues[i + 3] &&
              newCellValues[i + 6] &&
              newCellValues[i] === newCellValues[i + 3] &&
              newCellValues[i + 3] === newCellValues[i + 6]
            ) {
              console.log("GAME ENDED");
              break;
            }
          }
        } else {
          if (
            newCellValues[0] &&
            newCellValues[4] &&
            newCellValues[8] &&
            newCellValues[0] === newCellValues[4] &&
            newCellValues[4] === newCellValues[8]
          ) {
            console.log("GAME ENDED");
          } else if (
            newCellValues[2] &&
            newCellValues[4] &&
            newCellValues[6] &&
            newCellValues[2] === newCellValues[4] &&
            newCellValues[4] === newCellValues[6]
          ) {
            console.log("GAME ENDED");
          }
        }
      }

      setCellValues(newCellValues);
      setTurnValue(newTurnValue);
      setToggleValues(newToggleValues);
    }
  };
  return (
    <>
      <div id="game">
        <h1>Tic Tac Toe</h1>
        <Board
          cellValues={cellValues}
          winningCombination={winningCombination}
          cellClicked={onCellClicked}
        />
      </div>

      <div id="modal-overlay">
        <div id="game-result-modal">
          <div id="result-container">
            <div id="winner-container">
              <span></span>
            </div>
          </div>
          <div id="new-game-container">
            <button id="new-game-button">Start New Game</button>
          </div>
        </div>
      </div>
    </>
  );
};
