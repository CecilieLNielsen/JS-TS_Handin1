// Youtube lesson: https://www.youtube.com/watch?n=1&v=TlB_eWDSMt4

// function sayHello(name) {
//    console.log('Hello' + name);
// }



// sayHello('Cecilie');
 // console.log(module);

// const log = require('./logger');

// log('message');



// PATH EXAMPLE
//const path = require('path');

//var pathObj = path.parse(__filename);

//console.log(pathObj);




// OS EXAMPLE
//const os = require('os');

//var totalMemory = os.totalmem();

//var freeMemory = os.freemem();

//console.log('Total memory: ' + totalMemory);

//Template String
// ES6 / ES2015 : ECMAScript 6

//console.log(`Total Memory: ${totalMemory}`);
//console.log(`Free Memory: ${freeMemory}`);



/* FILESYSTEM EXAMPLE

//SYNC
const fs = require('fs'); // require the module and the use methods defined in this module, comes in pair sync and async, prefer async.

const files = fs.readdirSync('./');

console.log(files);

//ASYNC

fs.readdir('./', function(err, files) {
if (err) console.log('Error', err)
else console.log('Result', files)
});
*/


//EVENT EXAMPLE
const EventEmitter = require('events'); // EventEmitter is a class
//const emitter = new EventEmitter(); // emitter is an object


//Register a listener
// emitter.on('messageLogged', function(arg){ // e, eventArg
//    console.log('Listener called', arg);
// });



/* Raise: logging (data: message)

const Logger = require('./logger');
const logger = new Logger();

//Register a listener - duplicate with Arrow function
logger.on('messageLogged', (arg) => { // Using arrowfunction syntax instead
    console.log('Listener called', arg);
});
logger.log('message');
*/


// HTTP EXAMPLE

const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

//server.on('connection', (socket) => {
//    console.log('New connection...');
//});

server.listen(3000);

console.log('Listening on port 3000...');


