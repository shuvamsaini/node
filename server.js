const http = require("http");
const { createServer } = http;

const server = createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });

  res.end("Hello, this is a basic HTTP server running at port 3000!\n");
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http:localhost:${port}/`);
});