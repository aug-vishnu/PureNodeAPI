var msg = 'Test log & server is starting...';
console.log(msg);

// http module
http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

// http.createServer() method turns your computer into an HTTP server.
const server = http.createServer();

// Any request will trigger this
server.on("request", (request, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ "message": "Hello World! This response from pure Node.js API server" }));
});

// Starting Server 
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/...`);
  });