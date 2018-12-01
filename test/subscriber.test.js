const Subscriber = require('../subscriber.js');

const subscriber = new Subscriber();

describe('info', () => {
    it('get/set', () => {
        subscriber.update(0);
        expect(subscriber.info === 0).toBeTruthy();
    });
});
