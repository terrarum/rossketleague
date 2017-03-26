<template>
  <div class="gamedetails">
    <h2>Game Details</h2>
    <div class="details">
      <div class="details__date">
        {{ activeSeries.date }}
      </div>

      <div class="details__result">
        <div class="details__result-item details__result-item--title">WINNER</div>
        <div class="details__result-item details__result-item--title">LOSER</div>
        <div class="details__result-item">{{activeSeries.winner}}</div>
        <div class="details__result-item">{{activeSeries.loser}}</div>
      </div>

      <div class="details__games-title">
        Games
      </div>
      <div class="details__games" v-for="game in activeSeries.games">
        <div class="details__game">
          <div class="details__game__winner">{{ game.winner }}</div>
          <div class="details__game__score">{{ game.winnerScore }} - {{ game.loserScore }}</div>
          <div class="details__game__loser">{{ game.loser }} <span v-if="game.isOvertime">(OT)</span></div>
        </div>
      </div>

      <div class="details_note">
        Note: {{ activeSeries.note }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GameDetails',
    props: [
      'activeSeries',
    ],
  };
</script>

<style scoped lang="scss">
  .gamedetails {
    flex-basis: 50%;
    background-color: #eee;
    padding: 0 10px;
  }

  .details__date {
    padding: 5px 0;
    text-align: center;
  }

  .details__result {
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 5px;
  }

  .details__result-item {
    text-align: center;
    flex-basis: 50%;

    &--title {
      font-weight: 700;
      margin: 4px 0;
    }
  }

  .details__games-title {
    text-align: center;
    margin-bottom: 5px;
    font-weight: 700;
  }

  .details__game {
    display: flex;
  }

  .details__game__winner {
    text-align: right;
    flex-basis: 40%;
  }

  .details__game__score {
    text-align: center;
    flex-basis: 20%;
  }

  .details__game__loser {
    flex-basis: 40%;
  }

  .details_note {
    margin-top: 10px;
  }
</style>
