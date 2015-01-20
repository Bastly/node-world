var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "subscriber"});

// subber.js
var zmq = require('zmq')
  , sock = zmq.socket('sub');

sock.connect('tcp://127.0.0.1:3000');
sock.subscribe('kitty cats');
log.info('Subscriber connected to port 3000');

sock.on('message', function(topic, message) {
  log.info('received a message related to:', topic, 'containing message:', message);
});