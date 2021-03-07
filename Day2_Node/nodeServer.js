const os = require('./Exercise1');
const DOS_Detector = require('./dosDetector');
const dosDetector = new DOS_Detector(1000);

const http = require('http');
const server = http.createServer((req, res) => {
    dosDetector.addUrl(req.url)
  if (req.url === '/api/os-info') {
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(os));
    return res.end();
  }
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<h2>Simple node HTTP server demo</h2>
      <p>Exposes this endpoint <code>/api/os-info</code></p>
    `);
    return res.end();
  }
});
server.on('connection', (sock) => {
  // You can get the client-IP in here, using sock.remoteAddress)
});
server.listen(3000);
console.log('listening on 3000');
// Listener
dosDetector.on('DosDetected', (arg) => { 
    console.log('Possible DOS attack detected', arg);
    });



// Add the necessary changes to complete:
// The /api/os-info endpoint
// The DOS-detection feature
