<template>
  <div class="game">
    <div class="info">
      <div class="info-player">Player: {{playerName}}</div>
      <div class="into-tries">Tries {{tries}}</div>
    </div>
    <div>
      <Table v-if="!hasGameEnded" :cards="cards" @cards-selected="onCardsSelected" />
      <p class="game-ended-message" v-else>
        Contgratulations {{playerName}}, you have finished the game in {{tries}} tries!
        <router-link to="/" replace>Click here to go back.</router-link>
      </p>
    </div>
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
      hasGameEnded: false,
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
    this.currentGame.initialize(this.numberOfCards, this.playerName);
    this.currentGame.start();
  },
  methods: {
    onCardsSelected(cards) {
      this.currentGame.checkCards(cards);

      if (this.currentGame.hasEnded) {
        this.endGame();
      }
    },
    endGame() {
      this.hasGameEnded = true;
    },
  },
};
</script>

<style lang="scss">
.info {
  display: flex;
  justify-content: space-between;
}
</style>
