export const getPlayerTurn = (current) => {
  const players = ["one", "two", "three", "four"];
  const nbPlayers = players.length;

  const indexCurrent = players.indexOf(current);

  let newIndex;

  if (indexCurrent === nbPlayers - 1) {
    newIndex = 0;
  } else {
    newIndex = indexCurrent + 1;
  }

  return players[newIndex];
};
