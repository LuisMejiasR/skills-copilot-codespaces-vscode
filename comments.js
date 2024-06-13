// Create web server
// Create a web server that listens for requests on port 3000 and serves the comments.js file
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/javascript' });
  fs.readFile('./comments.js', 'utf8', (err, data) => {
    if (err) throw err;
    res.end(data);
  });
});

server.listen(3000, 'localhost', () => {
  console.log('Server running on http://localhost:3000/');
});