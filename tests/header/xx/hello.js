define(function (require) {
    var registerSuite = require('intern!object');
    var assert = require('intern/chai!assert');

    registerSuite({
        name: 'hello',

        'my heading': function () {
            return this.remote
                .get(require.toUrl('index.html'))
                .setFindTimeout(5000)
                .findByTagName('h1')
                .getVisibleText()
                .then(function (text) {
                    assert.strictEqual(text, 'Sandrina Pereira',
                        'My h1 should be Sandrina Pereira');
                });
        }
    });
});
