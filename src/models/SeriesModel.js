export default function (
  id = '',
  date = '',
  type = '',
  winner = '',
  loser = '',
  games = [],
  note = '',
) {
  return {
    id,
    date,
    type,
    winner,
    loser,
    games,
    note,
  };
}
