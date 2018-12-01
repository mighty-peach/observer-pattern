// @ts-check

class Publisher {
    constructor () {
        this.subscribers = [];
        this._info = null;
    }

    addSubscriber (subscriber) {
        this.subscribers.push(subscriber);
    }

    /**
     * @param {Number} id
     */
    removeSubscriber (id) {
        const index = this.subscribers.findIndex(subscriber => subscriber.id === id);
        if (index !== -1) this.subscribers.splice(index, 1);
    }

    /**
     * @param {Number} info
     */
    notifySubscribers (info) {
        this.subscribers.forEach(subscriber => subscriber.update(info));
    }

    /**
     * @returns {Number} _info
     */
    get info () {
        return this._info;
    }
    /**
     * @param {Number} newInfo
     */
    set info (newInfo) {
        this._info = newInfo;
        this.notifySubscribers(newInfo);
    }
};

module.exports = Publisher;
