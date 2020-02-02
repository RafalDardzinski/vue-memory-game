<template>
  <table>
    <thead>
      <tr>
        <th>Player</th>
        <th>Number of cards</th>
        <th>Tries</th>
        <th>Playtime</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(result, index) in results" :key="index">
        <td>{{result.playerName}}</td>
        <td>{{result.numberOfCards}}</td>
        <td>{{result.tries}}</td>
        <td>{{result.playTime}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { ResultsStorage } from '../business-logic';

export default {
  data() {
    return {
      results: [],
    };
  },
  mounted() {
    const results = ResultsStorage.fetchResults();
    this.results = results;
  },
};
</script>

<style lang="scss" scoped>
@import "../colors.scss";

  tr, th {
    padding: 5px;
  }

  tr:nth-child(even) {
    background-color: $lightAccent;
  }

  thead tr {
    background-color: $darkShades;
  }

  th {
    color: $lightShades;
    font-weight: bold;
  }
</style>
