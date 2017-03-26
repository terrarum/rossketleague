<template>
  <div class="league">
    <Loading v-if="loading"></Loading>

    <div class="stats" v-if="!loading">
      <Podium :players="players"></Podium>

      <div class="leaguedetails">
        <SeriesTable :serieses="serieses" v-on:activeSeriesId="setActiveSeriesId"></SeriesTable>
        <GameDetails :activeSeries="activeSeries"></GameDetails>
      </div>
    </div>
  </div>
</template>

<script>
  import Loading from '@/components/Loading';
  import Podium from '@/components/Podium';
  import SeriesTable from '@/components/SeriesTable';
  import GameDetails from '@/components/GameDetails';

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
        activeSeriesId: null,
      };
    },
    computed: {
      activeSeries() {
        if (this.activeSeriesId !== null) {
          return this.serieses[this.activeSeriesId];
        }
        return false;
      },
    },
    methods: {
      setActiveSeriesId(seriesId) {
        this.activeSeriesId = seriesId;
      },
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
      Podium,
      SeriesTable,
      GameDetails,
    },
  };
</script>

<style scoped>
  .leaguedetails {
    display: flex;
  }
</style>
