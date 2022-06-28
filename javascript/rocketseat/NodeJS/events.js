

const {EventEmitter } = require('events');
const ev = new EventEmitter();

ev.on ('saySomethings', () => {console.log ('Eu Ouvi Você')
})


ev.emit ('saySomethings')
ev.emit ('saySomethings')
