import { boardSize } from "../../init/initBoard";

export const calculSquarePosition = (square) => {
  const squareSize = boardSize / 10;
  const axeX = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

  const squareX = axeX.indexOf(square[0]);
  const squareY = square.substr(1);

  const xPosition = squareX * squareSize;
  const yPosition = boardSize - squareSize * squareY;

  return { xPosition, yPosition };
};
