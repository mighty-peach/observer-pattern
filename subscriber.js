// @ts-check

class Subscriber {
    constructor () {
        this.id = Date.now();
        this.info = null;
    }

    /**
     * @param {Number} info
     */
    update (info) {
        this.info = info;
        console.log('new info: ', info);
    }
};

module.exports = Subscriber;
