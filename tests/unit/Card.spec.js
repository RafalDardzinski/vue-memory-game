import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import Card from '@/components/Card.vue';
import CardObject from '@/business-logic/card';

describe('Card.vue', () => {
  const cardValue = 'cardValue';
  const cardColor = 'cardColor';
  const cardColorInverted = 'cardColorInverted';

  let cardObject;
  let unitUnderTest;

  beforeEach(() => {
    cardObject = new CardObject(cardValue, cardColor, cardColorInverted);
    unitUnderTest = shallowMount(Card, {
      propsData: {
        cardObject,
      },
    });
  });

  it('renders shortenedValue in card\'s averse', () => {
    // Assert
    const { shortenedValue } = unitUnderTest.vm;
    const averseText = unitUnderTest.find('.averse').text();
    expect(averseText).to.contain(shortenedValue);
  });

  describe('methods.flip()', () => {
    it('changes averseVisible to opposite value', async () => {
      // Arrange
      const oldValue = unitUnderTest.vm.averseVisible;

      // Act
      await unitUnderTest.vm.flip();

      // Assert
      expect(unitUnderTest.vm.averseVisible).to.equal(!oldValue);
    });

    it('emits \'card-flipped\' event', async () => {
      const eventName = 'card-flipped';

      // Act
      await unitUnderTest.vm.flip();

      // Assert
      const emittedEvents = unitUnderTest.emitted();
      expect(emittedEvents).to.have.property(eventName);
    });

    describe('When averseVisible is false...', () => {
      it('emits \'averse-visible\' event', async () => {
        // Arrange
        const eventName = 'averse-visible';

        // Act
        await unitUnderTest.vm.flip();

        // Assert
        const emittedEvents = unitUnderTest.emitted();
        expect(emittedEvents).to.have.property(eventName);
      });
    });

    describe('When averseVisible is true', () => {
      it('emits \'reverse-visible event\'', async () => {
        // Arrange
        const eventName = 'reverse-visible';
        unitUnderTest.setData({ averseVisible: true });

        // Act
        await unitUnderTest.vm.flip();

        // Assert
        const emittedEvents = unitUnderTest.emitted();
        expect(emittedEvents).to.have.property(eventName);
      });
    });
  });

  describe('When created...', () => {
    it('has averseVisible property that equals false', () => {
      // Assert
      expect(unitUnderTest.vm.averseVisible).to.equal(false);
    });
  });
});
