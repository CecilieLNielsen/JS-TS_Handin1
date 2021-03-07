// OS EXAMPLE

const os = require('os');

var platform = os.platform();
var osType = os.type();
var freeMemory = os.freemem();
var totalMemory = os.totalmem();
var EOL = os.EOL;

const osAll = {platform, osType, freeMemory, totalMemory, EOL};

/*
console.log(`platform: ${platform}`);
console.log(`osType: ${osType}`);
console.log(`freeMemory: ${freeMemory}`);
console.log(`totalMemory: ${totalMemory}`);
console.log('EOL: ' +  JSON.stringify(os.EOL));

*/

// console.log(`${JSON.stringify(osAll)}`);



module.exports = osAll;