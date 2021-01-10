export const changePlayerTurn = () => {
  return (dispatch, getState) => {
    const { pieces } = getState();
    dispatch(updatePlayerTurn(pieces));
  };
};

export const updatePlayerTurn = (pieces) => {
  return {
    type: "PLAYER_TURN",
    payload: pieces,
  };
};
export const updateGlobalHistoric = () => {
  return {
    type: "UPDATE_GLOBAL_HISTORIC",
  };
};
