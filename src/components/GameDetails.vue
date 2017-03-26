<template>
  <div class="gamedetails">
    <div class="winner">
      Winner: {{ activeSeries.winner }} <br>
      Loser: {{ activeSeries.loser }}
      <div class="games" v-for="game in activeSeries.games">
        <div class="game">
          {{ game.winner }} {{game.winnerScore}} - {{ game.loserScore }} {{ game.loser }}
        </div>
      </div>
      {{ activeSeries.note }}
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

</style>
