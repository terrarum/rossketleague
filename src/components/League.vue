<template>
  <div class="league">

    <Loading v-if="loading"></Loading>

    <div v-for="player in players">
      {{ player.name }} - {{ player.wins }}
    </div>

    <table>
      <tr>
        <th>Date</th>
        <th>Winner</th>
        <th>Loser</th>
        <th>Type</th>
        <th>Notes</th>
      </tr>
      <tr v-for="series in serieses">
        <td>{{ series.date }}</td>
        <td>{{ series.winner }}</td>
        <td>{{ series.loser }}</td>
        <td>Best of {{ series.type }}</td>
        <td>{{ series.note }}</td>
      </tr>
    </table>

  </div>
</template>

<script>
  import Loading from '@/components/Loading';

  import firebase from '@/firebase';
  import processor from '@/processors/main';

  const firebaseInstance = firebase.getInstance();

  export default {
    name: 'League',
    data() {
      return {
        loading: true,
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
        this.loading = false;
      });
    },
    components: {
      Loading,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
