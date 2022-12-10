
 const childprocess = require('child_process');
var http = require('http');
var url = require('url') ;

let browser = childprocess.exec('start chrome')
console.log(browser.eventNames()
);
let ports =[3000.3001]
http.createServer(function (req, res) {

  var hostname = req.headers.host;
  var pathname = url.parse(req.url).pathname; 
  console.log( hostname + pathname);

  res.writeHead(200);
  res.end();
}).listen(3001);

