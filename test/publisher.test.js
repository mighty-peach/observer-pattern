const Publisher = require('../publisher.js');

const publisher = new Publisher();

describe('info', () => {
    it('get/set', () => {
        publisher.info = 0;
        expect(publisher.info === 0).toBeTruthy();
        expect(publisher._info === 0).toBeTruthy();

        publisher.info = null;
        expect(publisher.info === null).toBeTruthy();
        expect(publisher._info === null).toBeTruthy();
    });

    it('on set expect notifySubscribers() call', () => {
        publisher.notifySubscribers = jest.fn();
        publisher.info = 0;
        expect(publisher.notifySubscribers.mock.instances.length).toBe(1);
    });
});

it('addSubscriber', () => {
    publisher.addSubscriber({ id: 0, info: 123123 });
    expect(publisher.subscribers.length === 1).toBeTruthy();
});

it('removeSubscriber', () => {
    publisher.subscribers = [{ id: 0, info: 123123 }, { id: 1, info: 123123 }];
    publisher.removeSubscriber(0);
    expect(publisher.subscribers).toEqual([{ id: 1, info: 123123 }]);
});
