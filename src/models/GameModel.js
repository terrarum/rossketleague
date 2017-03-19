export default function (
  winner = '',
  loser = '',
  isOvertime = 'false',
  scores = [],
) {
  return {
    winner,
    loser,
    isOvertime,
    scores,
  };
}
