const http = require("http");

const PORT = 80;

http.createServer(function (request, response) {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World Docker 5 port:' + PORT + ' \n');
}).listen(PORT);

console.log('Docker node.js Server running at http://localhost:' + PORT + '/');