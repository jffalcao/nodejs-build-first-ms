'use strict';

var RtmClient = require('@slack/client').RtmClient;

module.exports.init = function () {
    const rtm = new RtmClient(token, {logLevel: 'debug'});
    return rtm;
}




