const Publisher = require('../publisher.js');

const publisher = new Publisher(0.1);

describe('info', () => {
    it('get/set', () => {
        publisher.info = 0;
        expect(publisher.info === 0).toBeFalsy();
        expect(publisher._info === 0).toBeFalsy();

        publisher.info = null;
        expect(publisher.info === null).toBeTruthy();
        expect(publisher._info === null).toBeTruthy();

        publisher.info = 1;
        expect(publisher.info === 1).toBeTruthy();
        expect(publisher._info === 1).toBeTruthy();
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

it('isChanged', () => {
    publisher.info = 10;
    publisher.gup = 1;
    expect(publisher.isChanged(9)).toBe(true);
});
