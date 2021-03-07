const http = require('http');
const secureRandoms = require('./exercises/secureRandoms');
const [swapi, asyncSwapi] = require('./exercises/swapi');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-type', 'text/html');
    res.write('<h1>Welcome to my collections of exercises!</h1>');
    res.write('<p>You can write in the url following:</p>');
    res.write('<ul>');
    res.write('<li><code>/api/secure-randoms</code></li>');
    res.write('<li><code>/api/swapi</code></li>');
    res.write('</ul>');
    return res.end();
  }
  if (req.url === '/api/secure-randoms') {
    res.setHeader('Content-type', 'application/json');
    secureRandoms([64, 56, 48, 40, 32, 24, 16, 8])
      .then(result => {
        res.write(JSON.stringify(result));
        return res.end();
      })
      .catch(err => {
        res.write(JSON.stringify(err));
        return res.end();
      });
  }
  if (req.url === '/api/swapi') {
    res.setHeader('Content-type', 'application/json');
    asyncSwapi(1)
      .then(result => {
        res.write(JSON.stringify(result));
        return res.end();
      })
  }
});

server.on('connection', (sock) => {
  console.log('New connection at ' + sock.remoteAddress);
});

const port = 3000;
server.listen(port);
console.log('Server startet at locahost:' + port);