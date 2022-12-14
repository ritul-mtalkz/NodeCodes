var events = require('events');
var fs = require('fs');

var eventEmitter = new events.EventEmitter();

// Without using any events package handle the event
// var readStream = fs.createReadStream('./file2.txt');
// readStream.on('open', function () {
//   console.log('The file is open');
// });

// Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmitter.on('hello', myEventHandler);

//Fire the 'hello' event:
eventEmitter.emit('hello');