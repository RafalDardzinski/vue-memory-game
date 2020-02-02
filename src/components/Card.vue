<template>
  <div @click="flip()" :class="{ card: true, 'flipped': averseVisible, 'discarded': isDiscarded }">
    <div class="card-content">
      <div class="reverse"></div>
      <div class="averse">
        <div class="averse-value">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      averseVisible: false,
    };
  },
  props: {
    cardObj: Object,
  },
  computed: {
    isDiscarded() {
      return this.cardObj.isDiscarded;
    },
  },
  methods: {
    flip() {
      this.averseVisible = !this.averseVisible;
      this.$emit('card-flipped', this);
      setTimeout(() => {
        if (this.averseVisible) {
          this.$emit('averse-visible');
          return;
        }

        this.$emit('reverse-visible');
      }, 200);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../colors.scss";

  .card {
    width: 100px;
    height: 150px;
    cursor: pointer;
    user-select: none;
    transition: visibility .2s, opacity .2s;

    &.flipped > .card-content {
      transform: rotateY(180deg);
    }

    .card-content {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform .2s;

      & > div {
        position: absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;

        &.reverse {
          background-color: $main
        }

        &.averse {
          background-color: $lightAccent;
          transform: rotateY(180deg);
        }
      }
    }

    &.discarded {
      background-color: red;
      visibility: hidden;
      opacity: 0;
    }
  }
</style>
