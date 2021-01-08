export const calculMovePossible = (pieceList, piece) => {
  const axeX = "abcdefghij";
  const pieceName = piece.name.split("_")[0];

  const pieceAxeX = axeX.indexOf(piece.currentSquare.charAt(0)) + 1;
  const pieceAxeY = Number(piece.currentSquare.substr(1));

  const playerNumber = piece.playerNumber;
  const movePossible = [];

  const addMove = (squareX, squareY) => {
    const letter = axeX.charAt(squareX - 1);
    const squareToAdd = letter + squareY;

    movePossible.push(squareToAdd);
  };

  const addMoveKing = (squareX, squareY, type = false) => {
    const letter = axeX.charAt(squareX - 1);
    const squareToAdd = letter + squareY;

    if (
      type === false &&
      squareX > 0 &&
      squareX < 11 &&
      squareY > 0 &&
      squareY < 11 &&
      (isEmptySquare(squareX, squareY) || isOpponent(squareX, squareY))
    ) {
      movePossible.push(squareToAdd);
    }
  };

  const addMoveKnight = (squareX, squareY) => {
    const letter = axeX.charAt(squareX - 1);
    const squareToAdd = letter + squareY;

    if (
      squareX > 0 &&
      squareX < 11 &&
      squareY > 0 &&
      squareY < 11 &&
      (isEmptySquare(squareX, squareY) || isOpponent(squareX, squareY))
    ) {
      movePossible.push(squareToAdd);
    }
  };

  const addMovePawn = (squareX, squareY, isDiagonal) => {
    const letter = axeX.charAt(squareX - 1);
    const squareToAdd = letter + squareY;

    if (
      isEmptySquare(squareX, squareY) ||
      (isOpponent(squareX, squareY) && isDiagonal)
    ) {
      movePossible.push(squareToAdd);
    }
  };

  switch (pieceName) {
    case "pawn": {
      let moveX = pieceAxeX;
      let moveY = pieceAxeY;
      let isDiagonal = false;

      if (playerNumber === "one") {
        if (pieceAxeY < 10) {
          addMovePawn(moveX, moveY + 1, isDiagonal);
          if (pieceAxeX < 10 && isOpponent(moveX + 1, moveY + 1)) {
            isDiagonal = true;
            addMovePawn(moveX + 1, moveY + 1, isDiagonal);
          }
          if (pieceAxeX < 10 && pieceAxeY === 5) {
            addMovePawn(moveX + 1, moveY + 1, isDiagonal);
          }
          if (pieceAxeX > 1 && isOpponent(moveX - 1, moveY + 1)) {
            isDiagonal = true;
            addMovePawn(moveX - 1, moveY + 1, isDiagonal);
          }
          if (pieceAxeX > 1 && pieceAxeY === 5) {
            addMovePawn(moveX - 1, moveY + 1, isDiagonal);
          }
          if (!piece.hasMoved && isEmptySquare(moveX, moveY + 1)) {
            addMovePawn(moveX, moveY + 2, isDiagonal);
          }
        }
      } else if (playerNumber === "two") {
        if (pieceAxeX < 10) {
          addMovePawn(moveX + 1, moveY, isDiagonal);
          if (pieceAxeY < 10 && isOpponent(moveX + 1, moveY + 1)) {
            isDiagonal = true;
            addMovePawn(moveX + 1, moveY + 1, isDiagonal);
          }
          if (pieceAxeY < 10 && pieceAxeX === 5) {
            addMovePawn(moveX + 1, moveY + 1, isDiagonal);
          }
          if (pieceAxeY > 1 && isOpponent(moveX + 1, moveY - 1)) {
            isDiagonal = true;
            addMovePawn(moveX + 1, moveY - 1, isDiagonal);
          }
          if (pieceAxeY > 1 && pieceAxeX === 5) {
            addMovePawn(moveX + 1, moveY - 1, isDiagonal);
          }
          if (!piece.hasMoved && isEmptySquare(moveX + 1, moveY)) {
            addMovePawn(moveX + 2, moveY, isDiagonal);
          }
        }
      } else if (playerNumber === "three") {
        if (pieceAxeY > 1) {
          addMovePawn(moveX, moveY - 1, isDiagonal);
          if (pieceAxeX < 10 && isOpponent(moveX + 1, moveY - 1)) {
            isDiagonal = true;
            addMovePawn(moveX + 1, moveY - 1, isDiagonal);
          }

          if (pieceAxeX < 10 && pieceAxeY === 4) {
            addMovePawn(moveX + 1, moveY - 1, isDiagonal);
          }
          if (pieceAxeX > 1 && isOpponent(moveX - 1, moveY - 1)) {
            isDiagonal = true;
            addMovePawn(moveX - 1, moveY - 1, isDiagonal);
          }
          if (pieceAxeX > 1 && pieceAxeY === 4) {
            addMovePawn(moveX - 1, moveY - 1, isDiagonal);
          }
          if (!piece.hasMoved && isEmptySquare(moveX, moveY - 1)) {
            addMovePawn(moveX, moveY - 2, isDiagonal);
          }
        }
      } else if (playerNumber === "four") {
        if (pieceAxeX > 1) {
          addMovePawn(moveX - 1, moveY, isDiagonal);
          if (pieceAxeY < 10 && isOpponent(moveX - 1, moveY + 1)) {
            isDiagonal = true;
            addMovePawn(moveX - 1, moveY + 1, isDiagonal);
          }

          if (pieceAxeY < 10 && pieceAxeX === 4) {
            addMovePawn(moveX - 1, moveY + 1, isDiagonal);
          }
          if (pieceAxeY > 1 && isOpponent(moveX - 1, moveY - 1)) {
            isDiagonal = true;
            addMovePawn(moveX - 1, moveY - 1, isDiagonal);
          }
          if (pieceAxeY > 1 && pieceAxeX === 4) {
            addMovePawn(moveX - 1, moveY - 1, isDiagonal);
          }
          if (!piece.hasMoved && isEmptySquare(moveX - 1, moveY)) {
            addMovePawn(moveX - 2, moveY, isDiagonal);
          }
        }
      }

      return movePossible;
    }
    case "king": {
      let moveX = pieceAxeX;
      let moveY = pieceAxeY;

      addMoveKing(moveX, moveY + 1);
      addMoveKing(moveX + 1, moveY + 1);
      addMoveKing(moveX + 1, moveY);
      addMoveKing(moveX + 1, moveY - 1);
      addMoveKing(moveX, moveY - 1);
      addMoveKing(moveX - 1, moveY - 1);
      addMoveKing(moveX - 1, moveY);
      addMoveKing(moveX - 1, moveY + 1);

      return movePossible;
    }
    case "knight": {
      let moveX = pieceAxeX;
      let moveY = pieceAxeY;

      addMoveKnight(moveX + 2, moveY + 1);
      addMoveKnight(moveX + 1, moveY + 2);
      addMoveKnight(moveX + 2, moveY - 1);
      addMoveKnight(moveX + 1, moveY - 2);
      addMoveKnight(moveX - 2, moveY + 1);
      addMoveKnight(moveX - 1, moveY + 2);
      addMoveKnight(moveX - 2, moveY - 1);
      addMoveKnight(moveX - 1, moveY - 2);

      return movePossible;
    }
    case "bishop": {
      moves("topRight");
      moves("topLeft");
      moves("bottomRight");
      moves("bottomLeft");

      return movePossible;
    }
    case "rook": {
      moves("top");
      moves("bottom");
      moves("left");
      moves("right");

      return movePossible;
    }
    case "queen": {
      moves("top");
      moves("bottom");
      moves("left");
      moves("right");
      moves("topRight");
      moves("topLeft");
      moves("bottomRight");
      moves("bottomLeft");

      return movePossible;
    }
    default: {
      return ["nopawn"];
    }
  }

  function moves(direction) {
    let moveX = pieceAxeX;
    let moveY = pieceAxeY;

    const moveChange = () => {
      switch (direction) {
        case "topRight": {
          moveX++;
          moveY++;
          break;
        }
        case "topLeft": {
          moveX--;
          moveY++;
          break;
        }
        case "bottomRight": {
          moveX++;
          moveY--;
          break;
        }
        case "bottomLeft": {
          moveX--;
          moveY--;
          break;
        }
        case "top": {
          moveY++;
          break;
        }
        case "bottom": {
          moveY--;
          break;
        }
        case "left": {
          moveX--;
          break;
        }
        case "right": {
          moveX++;
          break;
        }
        default:
          return null;
      }
    };

    moveChange();

    while (
      moveX > 0 &&
      moveX < 11 &&
      moveY > 0 &&
      moveY < 11 &&
      isEmptySquare(moveX, moveY)
    ) {
      addMove(moveX, moveY);
      moveChange();
    }
    if (isOpponent(moveX, moveY)) {
      addMove(moveX, moveY);
    }
  }

  function isEmptySquare(squareX, squareY) {
    const letter = axeX.charAt(squareX - 1);
    const square = letter + squareY;

    const squareToCheck = pieceList.filter(
      (piece) => piece.currentSquare === square
    );

    return squareToCheck.length === 0 ? true : false;
  }

  function isOpponent(squareX, squareY) {
    const letter = axeX.charAt(squareX - 1);
    const square = letter + squareY;

    const squareToCheck = pieceList.filter(
      (piece) => piece.currentSquare === square
    );

    if (squareToCheck[0] && squareToCheck[0].playerNumber !== playerNumber) {
      return true;
    }
  }
};
