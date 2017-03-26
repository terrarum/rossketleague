<template>
  <div class="seriestable">
    <h2>League Series</h2>
    <table>
      <tr>
        <th>Series</th>
        <th>Winner</th>
        <th class="hide-on-mobile">Loser</th>
        <th class="hide-on-mobile">Type</th>
      </tr>
      <tr
        v-for="series in serieses"
        v-bind:key="series.id"
        v-on:mouseover="showDetails(series.id)"
        :class="{activeSeries: isActiveSeries(series)}">
        <td>{{ series.id + 1 }}</td>
        <td>{{ series.winner }}</td>
        <td class="hide-on-mobile">{{ series.loser }}</td>
        <td class="hide-on-mobile">Best of {{ series.type }}</td>
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

  h2 {
    text-align: center;
  }

  tr.activeSeries {
    background-color: #eee;
  }

  @media (max-width: 600px) {
    .seriestable {
      flex-basis: 40%;
    }
    .hide-on-mobile {
      display: none;
    }
  }
</style>
