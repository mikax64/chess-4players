import { pieceName, squarePieceInit } from "./pieceAndSquare";
import { calculSquarePosition } from "../redux/helpers/calculSquarePosition";

const axeX = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
export const forbiddenSquares = [
  "a1",
  "b1",
  "c1",
  "a2",
  "b2",
  "c2",
  "a3",
  "b3",
  "a10",
  "b10",
  "c10",
  "a9",
  "b9",
  "c9",
  "a8",
  "b8",
  "h10",
  "i10",
  "j10",
  "h9",
  "i9",
  "j9",
  "i8",
  "j8",
  "i3",
  "j3",
  "h2",
  "i2",
  "j2",
  "h1",
  "i1",
  "j1",
];
const squareNames = [];
export const boardList = [];
export const pieceList = [];
export const boardSize = 600;

createBoard();
initPiece();
calculPiecePosition();

function createBoard() {
  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      squareNames.push(axeX[j - 1] + i);
    }
  }

  for (let i = 0; i < squareNames.length; i++) {
    let firstColor = null;
    let secondColor = null;

    if (squareNames[i].slice(-1) % 2) {
      firstColor = "white";
      secondColor = "black";
    } else {
      firstColor = "black";
      secondColor = "white";
    }
    boardList.push({
      squareName: squareNames[i],
      squareColor: i % 2 ? firstColor : secondColor,
      isForbidden: forbiddenSquares.includes(squareNames[i]) ? true : false,
      currentPiece: null,
      xPosition: null,
      yPosition: null,
    });
  }
}

function initPiece() {
  boardList.reverse();

  for (let i = 0; i < pieceName.length; i++) {
    const splitPiece = pieceName[i].split("_");

    boardList.forEach((el) => {
      if (el.squareName === squarePieceInit[i]) {
        el.currentPiece = pieceName[i];
      }
    });

    pieceList.push({
      name: pieceName[i],
      currentSquare: squarePieceInit[i],
      playerNumber: splitPiece[2],
      type: splitPiece[0],
      movePossible: [],
      historic: [squarePieceInit[i]],
      relativeHistoric: [],
      hasMoved: false,
      xPosition: null,
      yPosition: null,
      index: i,
    });
  }
}

function calculPiecePosition() {
  pieceList.map((piece) => {
    piece.xPosition = calculSquarePosition(piece.currentSquare).xPosition;
    piece.yPosition = calculSquarePosition(piece.currentSquare).yPosition;
    return piece;
  });
}
