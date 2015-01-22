var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "subscriber"});

// subber.js
var zmq = require('zmq')
  , sock = zmq.socket('sub');

sock.connect('tcp://'+ process.argv[2] +':3000');
sock.subscribe('kitty cats');
log.info('Subscriber connected to ' + process.argv[2] + ':3000');

sock.on('message', function(topic, message) {
  log.info('received a message related to:', topic, 'containing message:', message);
});