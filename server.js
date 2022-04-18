const http = require("http");

// Create a local server to receive data from
http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    if (req.url.toLowerCase() === "/users") {
      res.end(
        JSON.stringify({
          data: "Users Route!",
        })
      );
    }
    if (req.url.toLowerCase() === "/products") {
      res.end(
        JSON.stringify({
          data: "products Route!",
        })
      );
    }
    if (req.url.toLowerCase() === ("/home" || "")) {
      res.end(
        JSON.stringify({
          data: "Home Route!",
        })
      );
    }
  })
  .listen(4001, () => console.log("Running at :4001"));
