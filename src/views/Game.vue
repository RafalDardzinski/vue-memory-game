<template>
  <div class="about">
    <h1>This is a game</h1>
    <div>Tries {{tries}}</div>
    <div>Player: {{playerName}}</div>
    <Table :cards="cards" @cards-selected="onCardsSelected" />
  </div>
</template>
<script>
import { GameFactory } from '@/business-logic';
import Table from '@/components/Table.vue';

export default {
  props: {
    playerName: String,
    numberOfCards: {
      type: Number,
      default: 4,
    },
  },
  components: {
    Table,
  },
  data() {
    return {
      currentGame: null,
    };
  },
  computed: {
    cards() {
      return this.currentGame.cards;
    },
    tries() {
      return this.currentGame.tries;
    },
  },
  created() {
    this.currentGame = GameFactory.create();
    this.currentGame.initialize(this.numberOfCards);
  },
  methods: {
    onCardsSelected(cards) {
      this.currentGame.checkCards(cards);
    },
  },
};
</script>
<style lang="scss" scoped>

</style>
