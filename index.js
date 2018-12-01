const Subscriber = require('./subscriber.js');
const Publisher = require('./publisher.js');

const publisher = new Publisher(0.05);
const subscriber1 = new Subscriber();
const subscriber2 = new Subscriber();
const subscriber3 = new Subscriber();

publisher.addSubscriber(subscriber1);
publisher.addSubscriber(subscriber2);
publisher.addSubscriber(subscriber3);

setInterval(() => {
    if (publisher.subscribers.length > 0) {
        let info = Math.random();
        publisher.info = info;

        if (info > 0.9) {
            publisher.removeSubscriber(publisher.subscribers[0].id);
        }
    }
}, 1000);
