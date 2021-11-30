const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', num => {
    console.log(`started ${num}`);
})

console.log('here we go');

eventEmitter.emit('start', 34)