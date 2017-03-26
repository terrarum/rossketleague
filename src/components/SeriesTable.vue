<template>
  <div class="seriestable">
    <table>
      <tr>
        <th>Date</th>
        <th>Winner</th>
        <th>Loser</th>
        <th>Type</th>
      </tr>
      <tr v-for="series in serieses" v-bind:key="series.id">
        <td>{{ series.date }}</td>
        <td>{{ series.winner }}</td>
        <td>{{ series.loser }}</td>
        <td>Best of {{ series.type }}</td>
        <td><button v-on:click="showDetails(series.id)">Details</button></td>
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
