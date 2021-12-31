import React, { useState } from "react";

import { isGameOverState } from "../../utils/CalcGameOver";

import { Board } from "../Board/Board";
import { ResultModal } from "../ResultModal/ResultModal";
import "./Game.css";

export const Game = () => {
  const [gameOverState, setGameOverState] = useState(false);
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

      const newGameOverState = isGameOverState (newCellValues);

      setCellValues(newCellValues);
      setTurnValue(newTurnValue);
      setToggleValues(newToggleValues);
      setGameOverState(newGameOverState);
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

      <ResultModal gameOver={gameOverState} />
    </>
  );
};
