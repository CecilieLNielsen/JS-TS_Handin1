//(function (exports, require, module, _filename, _dirname) {
//Module wrapper function

//console.log(__filename);
//console.log(__dirname);

const EventEmitter = require('events');



var url = 'https://mylogger.io/log';

class Logger extends EventEmitter {
   log(message){ //Method
    // Send an HTTP request
    console.log(message);

    
    //Raise an event
    this.emit('messageLogged', {id: 1, url: 'http://'}); //Event argument
    
    //Emit = making a noise, produce - signalling that an event has happend    
} 
}



module.exports = Logger;

// });