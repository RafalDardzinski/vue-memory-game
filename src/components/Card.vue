<template>
  <div @click="flip()" :class="{ card: true, 'flipped': averseVisible, 'discarded': isDiscarded }">
    <div class="card-content">
      <div class="reverse">
      </div>
      <div class="averse"
        :style="{ backgroundColor: color, color: colorInverted, borderColor: colorInverted }"
      >
        <div class="averse-value">
          {{ shortenedValue }}
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
    cardObject: Object,
  },
  computed: {
    isDiscarded() {
      return this.cardObject.isDiscarded;
    },
    color() {
      return this.cardObject.color;
    },
    colorInverted() {
      return this.cardObject.colorInverted;
    },
    shortenedValue() {
      return this.cardObject.value.substring(0, 8);
    },
  },
  methods: {
    flip() {
      this.averseVisible = !this.averseVisible;
      this.$emit('card-flipped', this);
      return new Promise((resolve) => {
        setTimeout(() => {
          if (this.averseVisible) {
            this.$emit('averse-visible');
            resolve();
            return;
          }

          this.$emit('reverse-visible');
          resolve();
        }, 200);
      });
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
          transform: rotateY(180deg);
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 1.2em;
          width: 100%;
          border-width: 2px;
          border-style: solid;
          box-sizing: border-box;
        }
      }
    }

    &.discarded {
      visibility: hidden;
      opacity: 0;
    }
  }
</style>
