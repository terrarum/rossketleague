export default function (
  date = '',
  type = '',
  winner = '',
  loser = '',
  games = [],
  note = '',
) {
  return {
    date,
    type,
    winner,
    loser,
    games,
    note,
  };
}
