<template>
  <div class="main-menu">
    <h3>Welcome to the Memory Game</h3>
    <div class="game-settings">

      <input
        type="text"
        name="player-name"
        id="player-name"
        v-model="playerName"
      >
      <input
        v-model.number="numberOfCards"
        type="number"
        name="cardsnumber"
        id="cardsnumber"
        step="2"
        min="4"
        max="24"
        placeholder="4"
        ref="numberOfCardsInput"
        @input="refreshValidation()"
      >
    </div>
    <p v-if="isNumberOfCardsInputValid">
      <router-link :to="{
        name: 'Game',
        params: { numberOfCards: numberOfCards, playerName }
      }"
      >Click here to start</router-link>
    </p>
    <p class="warning" v-else>
      Number of cards must be an even number between 4 and 24.
    </p>
    <div class="scores">
      <LastScores />
    </div>
  </div>
</template>

<script>
import LastScores from './LastScores.vue';

export default {
  name: 'HelloWorld',
  components: {
    LastScores,
  },
  data() {
    return {
      playerName: 'Player',
      numberOfCards: 4,
      isNumberOfCardsInputValid: true,
    };
  },
  computed: {
  },
  methods: {
    refreshValidation() {
      this.isNumberOfCardsInputValid = this.$refs.numberOfCardsInput.checkValidity();
    },
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.warning {
  color: red;
  font-weight: bold;
}

.scores {
  table {
    margin: 0 auto;
  }
}
</style>
