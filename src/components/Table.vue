<template>
  <div class="cards-table">
    <div
      class="card-container"
      v-for="(card, index) in cards"
      :key="index"
      @click.capture="filterCardClick(card, $event)"
    >
      <Card
        :cardObj="card"
        @card-flipped="selectCard(card, $event)"
        @averse-visible="verifySelectedCards"
        @reverse-visible="unlockTable"
      />
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
  },
  data() {
    return {
      selectedCards: [],
      selectedCardsVms: [],
      tableLocked: false,
    };
  },
  props: {
    cards: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    selectCard(card, cardVm) {
      if (!cardVm.averseVisible) {
        return;
      }

      this.selectedCards.push(card);
      this.selectedCardsVms.push(cardVm);
      if (this.selectedCards.length === 2) {
        this.tableLocked = true;
      }
    },
    filterCardClick(card, event) {
      if (this.selectedCards.includes(card) || this.tableLocked) {
        event.stopPropagation();
      }
    },
    verifySelectedCards() {
      if (this.selectedCards.length < 2) {
        return;
      }

      this.$emit('cards-selected', this.selectedCards);
      setTimeout(() => {
        this.resetSelectedCards();
      }, 400);
    },
    resetSelectedCards() {
      this.selectedCards.splice(0, this.selectedCards.length);

      this.selectedCardsVms.forEach(vm => vm.flip());
      this.selectedCardsVms.splice(0, this.selectedCardsVms.length);
    },
    unlockTable() {
      this.tableLocked = false;
    },
  },
  created() {
    this.initialCardsLength = this.cards.length;
  },
};
</script>

<style lang="scss" scoped>
  .cards-table {
    width: 624px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    .card-container {
      margin: 2px;
    }
  }
</style>
