export const getWinner = (pieces) => {
  const players = ["one", "two", "three", "four"];
  const remainingPlayers = [];

  for (let i = 0; i < players.length; i++) {
    const player = pieces.filter((obj) => obj.playerNumber === players[i]);
    if (player.length > 0) remainingPlayers.push(players[i]);
  }

  const winner = remainingPlayers.length > 1 ? null : remainingPlayers[0];
  return winner;
};
