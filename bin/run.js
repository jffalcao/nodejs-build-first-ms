'use strict';

const slackClient = require('../server/SlackClient');
const service = require('../server/service');
const http = require('http');
const server = http.createServer(service);

const slackToken = 'xoxb-370134761921-370926676325-AStTIwkLq0bzsj5l33aXJLsd';
const slackLogLevel = 'debug';

const rtm = slackClient(slackToken, slackLogLevel)
server.listen(3000);

server.on('listening', () => {
    console.log(`IRIS is listening on ${server.address().port} in ${service.get('env')} mode` );    
});