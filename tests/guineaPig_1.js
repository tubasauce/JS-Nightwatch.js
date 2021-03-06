var https = require('https');
var SauceLabs = require("saucelabs");

module.exports = {

    '@tags': ['guineaPig'],

    'Fail 2': function(client) {
        client
            .url('https://saucedemo.com')
            .waitForElementVisible('body', 1000)
            .assert.title('Banana');
    },

    'Not Fail 1': function(client) {
        client
            .url('https://saucedemo.com')
            .waitForElementVisible('body', 1000)
            .assert.title('Swag Labs');
    },



    afterEach: function(client, done) {
        client.customSauceEnd();

        setTimeout(function() {
            done();
        }, 1000);

    }

};
