export const getPlayerTurn = (current, pieces) => {
  const players = ["one", "two", "three", "four"];
  const remainingPlayers = [];

  for (let i = 0; i < players.length; i++) {
    const player = pieces.filter((obj) => obj.playerNumber === players[i]);
    if (player.length > 0) remainingPlayers.push(players[i]);
  }

  const nbPlayers = remainingPlayers.length;
  const indexCurrent = remainingPlayers.indexOf(current);

  let newIndex;

  if (indexCurrent === nbPlayers - 1) {
    newIndex = 0;
  } else {
    newIndex = indexCurrent + 1;
  }

  return remainingPlayers[newIndex];
};
