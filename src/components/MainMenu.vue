<template>
  <div class="main-menu">
    <h3>Welcome to the Memory Game</h3>
    <div>
      <input type="text" name="player-name" id="player-name" v-model="playerName">
      <input
        v-model="numberOfCards"
        type="number"
        name="cardsnumber"
        id="cardsnumber"
        step="2"
        min="4"
        max="24"
        placeholder="4"
      >
    </div>
    <p>
      <router-link :to="{
        name: 'Game',
        params: { numberOfCards: parseInt(numberOfCards), playerName }
      }"
      >Click here to start</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      playerName: 'Player',
      numberOfCards: 4,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
