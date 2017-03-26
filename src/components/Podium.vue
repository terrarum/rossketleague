<template>
  <div class="podium">
    <div class="player" v-for="player in players" :style="{ height: podiumHeight(player) + 'px' }">
      <div class="player__name">{{ player.name }}</div>
      <div class="player__wins">{{ player.wins }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Podium',
    props: [
      'players',
    ],
    methods: {
      podiumHeight(player) {
        const maxWins = this.players[0].wins;
        const percent = player.wins / maxWins;
        return 200 * percent;
      },
    },
  };
</script>

<style scoped lang="scss">
  .podium {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    border-bottom: 5px solid black;
    margin: 60px auto;
    flex-basis: 50%;
  }

  .player {
    width: 100px;
    text-align: center;
    padding-top: 10px;
    min-height: 100px;
  }

  .player__wins {
    font-family: 'Righteous', cursive;
    font-size: 40px;
    color: #000;
    font-weight: 700;
  }

  .player__name {
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    margin-bottom: 5px;
    text-transform: uppercase;
    font-family: sans-serif;
  }
</style>
