<template>
  <div class="hello">
    <div v-for="player in players">
      {{ player.name }} - {{ player.wins }}
    </div>

    <table>
      <tr>
        <th>Date</th>
        <th>Winner</th>
      </tr>
      <tr v-for="series in serieses">
        <td>{{ series.date }}</td>
        <td>{{ series.winner }}</td>
      </tr>
    </table>


  </div>
</template>

<script>
  import firebase from '@/firebase';
  import processor from '@/processors/main';

  const firebaseInstance = firebase.getInstance();

  export default {
    name: 'League',
    data() {
      return {
        players: [],
        serieses: [],
      };
    },
    mounted() {
      firebaseInstance.database().ref('games').once('value').then((snapshot) => {
        const games = snapshot.val();
        const tournament = processor.process(games);
        this.players = tournament.players;
        this.serieses = tournament.series;
      });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
