export const isGameOverState = (newCellValues) => {
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
          return true;
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
          console.log("GAME ENDED AND THE WINNER IS " + newCellValues[i]);
          return true;
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
        console.log("GAME ENDED AND THE WINNER IS " + newCellValues[i]);
        return true;
      } else if (
        newCellValues[2] &&
        newCellValues[4] &&
        newCellValues[6] &&
        newCellValues[2] === newCellValues[4] &&
        newCellValues[4] === newCellValues[6]
      ) {
        console.log("GAME ENDED AND THE WINNER IS " + newCellValues[i]);
        return true;
      }
    }
  }
};
