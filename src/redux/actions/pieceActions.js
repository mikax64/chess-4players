import { calculCastling } from "./../helpers/calculCastling";

export const calculMoves = () => {
  return {
    type: "CALCUL_MOVES",
  };
};
export const resetMoves = (color) => {
  return {
    type: "RESET_MOVES",
    payload: color,
  };
};

export const updateHistoric = () => {
  return {
    type: "UPDATE_HISTORIC",
  };
};

export const updateRelativeHistoric = () => {
  return {
    type: "UPDATE_RELATIVE_HISTORIC",
  };
};

export const updatePiecePosition = (pieceName, newPosition) => {
  return {
    type: "UPDATE_POSITION_PIECE",
    payload: pieceName,
    meta: newPosition,
  };
};

export const removePiece = (indexPiece) => {
  return {
    type: "REMOVE_PIECE",
    payload: indexPiece,
  };
};
export const promotionPiece = (pieceName, endName) => {
  return {
    type: "PROMOTION_PIECE",
    payload: pieceName,
    meta: endName,
  };
};

export const updateCastling = (piece, square, add) => {
  return {
    type: "UPDTATE_CASTLING",
    payload: piece,
    meta: square,
    add,
  };
};

export const displayMovePossible = (moves) => {
  return {
    type: "DISPLAY_MOVE_POSSIBLE",
    payload: moves,
  };
};

export const updatePiece = (pieceName, newPosition) => {
  return (dispatch, getState) => {
    dispatch(updatePiecePosition(pieceName, newPosition));
    dispatch(updateHistoric());
    dispatch(updateRelativeHistoric());
    dispatch(calculMoves());

    const { pieces, game } = getState();

    function checkCastling() {
      const castling = (type, kingColor) => {
        if (calculCastling(type, pieces, kingColor) !== false) {
          const piece = pieces.filter(
            (piece) => piece.name === `king_1_${kingColor}`
          )[0];
          dispatch(
            updateCastling(piece, calculCastling(type, pieces, kingColor), true)
          );
        }
      };

      castling("short", "white");
      castling("long", "white");
      castling("short", "black");
      castling("long", "black");
    }
  };
};
