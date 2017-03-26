export default function (
  winner = '',
  winnerScore = '',
  loser = '',
  loserScore = '',
  isOvertime = 'false',
) {
  return {
    winner,
    winnerScore,
    loser,
    loserScore,
    isOvertime,
  };
}
