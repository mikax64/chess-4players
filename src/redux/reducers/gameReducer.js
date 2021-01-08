import { getPlayerTurn } from "../helpers/getPlayerTurn";

const inititalState = {
  playerTurn: "one",
  globalHistoric: { pieceMove: [] },
  currentMovePossible: [],
};

export const gameReducer = (state = inititalState, action) => {
  switch (action.type) {
    case "PLAYER_TURN": {
      return {
        ...state,
        playerTurn: getPlayerTurn(state.playerTurn),
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
