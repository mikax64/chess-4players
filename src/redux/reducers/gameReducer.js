import { getPlayerTurn } from "../helpers/getPlayerTurn";
import { getWinner } from "../helpers/getWinner";

const inititalState = {
  playerTurn: "one",
  playerWinner: null,
  globalHistoric: { pieceMove: [] },
  currentMovePossible: [],
};

export const gameReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "PLAYER_TURN": {
      return {
        ...state,
        playerTurn: getPlayerTurn(state.playerTurn, action.payload),
        playerWinner: getWinner(action.payload),
      };
    }
    case "UPDATE_GLOBAL_HISTORIC": {
      return {
        ...state,
        globalHistoric: [...state.globalHistoric],
      };
    }

    case "DISPLAY_MOVE_POSSIBLE": {
      return {
        ...state,
        currentMovePossible: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};
