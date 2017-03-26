<template>
  <div class="seriestable">
    <h2>League Series</h2>
    <table>
      <tr>
        <th>Series</th>
        <th>Winner</th>
        <th>Loser</th>
        <th>Type</th>
      </tr>
      <tr
        v-for="series in serieses"
        v-bind:key="series.id"
        v-on:mouseover="showDetails(series.id)"
        :class="{activeSeries: isActiveSeries(series)}">
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
      'activeSeriesId',
    ],
    computed: {
    },
    methods: {
      showDetails(seriesId) {
        this.$emit('activeSeriesId', seriesId);
      },
      isActiveSeries(series) {
        if (series.id === this.activeSeriesId) {
          return true;
        }
        return false;
      },
    },
  };
</script>

<style scoped lang="scss">
  .seriestable {
    flex-basis: 50%;

    table {
      width: 100%;
      border-collapse: collapse;
    }

    th {
      text-align: left;
    }

    td {
      padding-top: 5px;
    }
  }

  tr.activeSeries {
    background-color: #eee;
  }
</style>
