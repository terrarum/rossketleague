<template>
  <div class="gamedetails">
    <h2>Game Details</h2>
    <div class="details">
      <div class="details__meta">
        {{ activeSeries.date }}<span class="meta-spacer"></span>Best of {{ activeSeries.type }}
      </div>

      <div class="details__result">
        <div class="details__result-item details__result-item--title">WINNER</div>
        <div class="details__result-item details__result-item--title">LOSER</div>
        <div class="details__result-item">{{activeSeries.winner}}</div>
        <div class="details__result-item">{{activeSeries.loser}}</div>
      </div>

      <div class="details__games-title">
        GAMES
      </div>
      <div class="details__games">
        <div class="details__game" v-for="game in activeSeries.games">
          <div class="details__game__winner">{{ game.winner }}</div>
          <div class="details__game__score">{{ game.winnerScore }}<span class="spacer">-</span>{{ game.loserScore }}</div>
          <div class="details__game__loser">{{ game.loser }} <span v-if="game.isOvertime">(OT)</span></div>
        </div>
      </div>

      <div class="details_note" v-if="activeSeries.note">
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

  $spacing: 20px;
  $spacing-sm: 10px;

  h2 {
    text-align: center;
  }

  .gamedetails {
    flex-basis: 50%;
    background-color: #eee;
    padding: 0 10px;
    font-size: 14px;
  }

  .details__meta {
    text-align: center;
    margin-bottom: $spacing;
  }

  .details__type {
    text-align: center;
    margin-bottom: $spacing;
  }

  .details__result {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: $spacing;
  }

  .details__result-item {
    text-align: center;
    flex-basis: 50%;

    &--title {
      font-weight: 700;
      margin-bottom: $spacing-sm;
      font-size: 16px;
    }
  }

  .details__games-title {
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    margin-bottom: $spacing-sm;
  }

  .details__games {
    margin-bottom: $spacing;
  }

  .details__game {
    display: flex;
  }

  .details__game__winner {
    text-align: right;
    flex-basis: 35%;
  }

  .details__game__score {
    text-align: center;
    flex-basis: 30%;
    font-size: 16px;
    padding-bottom: 2px;
  }

  .meta-spacer::before {
    content: ' - ';
  }

  .spacer {
    padding: 6px;
  }

  .details__game__loser {
    flex-basis: 35%;
  }

  .details_note {
    font-size: 12px;
  }

  @media (max-width: 600px) {
    .gamedetails {
      flex-basis: 60%;
    }

    .meta-spacer::before {
      content: ' ';
      display: block;
     }

    .spacer {
      padding: 1px;
    }
  }
</style>
