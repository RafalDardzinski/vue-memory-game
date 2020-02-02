import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Card from '@/components/Card.vue';

describe('Card.vue', () => {
  const cardValue = 'test value';

  let unitUnderTest;

  beforeEach(() => {
    unitUnderTest = shallowMount(Card, {
      propsData: {
        cardValue,
      },
    });
  });

  it('renders cardValue in card\'s averse', () => {
    // Assert
    const averseText = unitUnderTest.find('.averse').text();
    expect(averseText).to.contain(cardValue);
  });

  describe('methods.flip()', () => {
    it('changes isFlipped to opposite value', () => {
      // Arrange
      const oldValue = unitUnderTest.vm.isFlipped;

      // Act
      unitUnderTest.vm.flip();

      // Assert
      expect(unitUnderTest.vm.isFlipped).to.equal(!oldValue);
    });

    it('emites \'card-flipped\' event with isFlipped property value as payload', async () => {
      const eventName = 'card-flipped';

      // Act
      unitUnderTest.vm.flip();
      await unitUnderTest.vm.$nextTick();

      // Assert
      const emittedEvents = unitUnderTest.emitted();
      expect(emittedEvents).to.have.property(eventName);
      expect(emittedEvents[eventName][0]).to.contain(unitUnderTest.vm.isFlipped);
    });
  });

  describe('When created...', () => {
    it('has isFlipped property that equals false', () => {
      // Assert
      expect(unitUnderTest.vm.isFlipped).to.equal(false);
    });
  });
});
