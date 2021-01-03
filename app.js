const http = require("http")

http.createServer(function (req, res) {
    res.writeHead(200, {'content-Type':  'text/plain'});
    res.end('Hello AWS!');
}).listen(7000);


