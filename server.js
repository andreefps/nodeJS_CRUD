const http = require("http");

// Create a local server to receive data from
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
  })
  .listen(4001, () => console.log("Running at :4001"));
