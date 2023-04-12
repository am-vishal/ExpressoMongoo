const http = require("http");
// const url = require("url");
const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName == "/overview") {
    res.end("This is overview");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>page not found</h1>");
  }
});
server.listen(8000, () => {
  console.log("server is running");
});
