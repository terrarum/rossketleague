<template>
  <div class="seriestable">
    <table>
      <tr>
        <th>Game</th>
        <th>Winner</th>
        <th>Loser</th>
        <th>Type</th>
      </tr>
      <tr v-for="series in serieses" v-bind:key="series.id" v-on:mouseover="showDetails(series.id)">
        <td>{{ series.id + 1 }}</td>
        <td>{{ series.winner }}</td>
        <td>{{ series.loser }}</td>
        <td>Best of {{ series.type }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'SeriesTable',
    props: [
      'serieses',
    ],
    methods: {
      showDetails(seriesId) {
        this.$emit('activeSeriesId', seriesId);
      },
    },
  };
</script>

<style scoped lang="scss">

</style>
