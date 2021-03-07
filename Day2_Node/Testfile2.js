const DOS_Detector = require('./dosDetector');
const dosDetector = new DOS_Detector(1000);

// Register a listener
dosDetector.on('DosDetected', (arg) => { 
console.log('Possible DOS attack detected', arg);
});

dosDetector.addUrl('https://mylogger.io/log');
setTimeout(() => {dosDetector.addUrl('https://mylogger.io/log')}, 500);
