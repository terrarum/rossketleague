import TournamentModel from '@/models/TournamentModel';
import PlayerModel from '@/models/PlayerModel';
import SeriesModel from '@/models/SeriesModel';
import GameModel from '@/models/GameModel';

const tournamentData = new TournamentModel();

// Add a player to the list of players.
const addPlayer = function addPlayer(playerName, isGameWinner) {
  let isNewPlayer = true;
  // See if player exists.
  tournamentData.players.forEach((player) => {
    if (player.name === playerName) {
      isNewPlayer = false;
    }
  });

  // If player is new, add them.
  if (isNewPlayer) {
    const playerModel = new PlayerModel(playerName);
    if (isGameWinner) {
      playerModel.wins += 1;
    }
    tournamentData.players.push(playerModel);
  }

  // If player is not new and is a winner, update wins.
  if (!isNewPlayer && isGameWinner) {
    Object.values(tournamentData.players).forEach((playerRef) => {
      const player = playerRef;
      if (player.name === playerName) {
        player.wins += 1;
      }
    });
  }
};

const zeroPad = function zeroPad(m) {
  return m < 10 ? `0${m}` : m;
};

const processSeries = function processGame(series, index) {
  const seriesModel = new SeriesModel();

  seriesModel.note = series.Note;
  const date = new Date(series.Date);
  const year = date.getFullYear();
  const month = zeroPad(date.getMonth() + 1);
  const day = zeroPad(date.getDate());
  seriesModel.date = `${year}-${month}-${day}`;
  const player1 = series['Competitor A'];
  const player2 = series['Competitor B'];
  const games = series.Results;

  // Track series wins.
  const seriesWins = {
    [player1]: 0,
    [player2]: 0,
  };

  // For each game in the series,
  // get the winner, loser and scores.
  games.forEach((game) => {
    const gameModel = new GameModel();

    const resultValues = game.trim().split(' ');

    const winner = resultValues[0].trim();
    const loser = winner === player1 ? player2 : player1;
    const score = resultValues[1].trim().split('-');
    const isOvertime = resultValues[2] === 'OT';
    seriesWins[winner] += 1;
    gameModel.winner = winner;
    gameModel.winnerScore = score[0];
    gameModel.loser = loser;
    gameModel.loserScore = score[1];
    gameModel.isOvertime = isOvertime;

    seriesModel.games.push(gameModel);
    seriesModel.id = index;
  });

  // Calculate winner of series.
  const sw1 = seriesWins[player1];
  const sw2 = seriesWins[player2];
  seriesModel.winner = sw1 > sw2 ? player1 : player2;
  seriesModel.winner = sw2 > sw1 ? player2 : player1;
  seriesModel.loser = seriesModel.winner === player1 ? player2 : player1;

  // Determine the type of game by the number of games the winner won.
  seriesModel.type = (seriesWins[seriesModel.winner] * 2) - 1;

  // Add player to players.
  // Compile list of players.
  addPlayer(seriesModel.winner, true);
  addPlayer(seriesModel.loser);

  tournamentData.series.push(seriesModel);
};

// Begin processing the games.
const process = function process(serieses) {
  Object.values(serieses).forEach((series, index) => {
    // Process games.
    processSeries(series, index);
  });

  // Sort players.
  tournamentData.players.sort((a, b) => a.wins < b.wins);

  return tournamentData;
};

export default {
  process,
};
