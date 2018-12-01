// @ts-check

class Publisher {
    constructor (gup) {
        this.subscribers = [];
        this._info = null;
        this.gup = gup;
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
     * @param {Number} newInfo
     * @returns {Boolean}
     */
    isChanged (newInfo) {
        let diff = this.info - newInfo;
        diff = diff > 0 ? diff : -1 * diff;

        return diff >= this.gup;
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
        if (this.isChanged(newInfo) && newInfo !== null) {
            this._info = newInfo;
            this.notifySubscribers(newInfo);
        }
    }
};

module.exports = Publisher;
