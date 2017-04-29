//var connect = require('connect');
//var serveStatic = require('serve-static');
//connect().use(serveStatic(__dirname)).listen(8080, function(){
//    console.log('Server running on 80...');
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//    response.write('856912b5');
//    response.end();
//});

//var http = require('http');

//var server = new http.Server();
//server.listen(8080);


//server.on('request', function (request, response){
//	response.writeHead(200, {'Content-Type': 'text/plain'});
//	response.write('856912b5');
//	response.end();
//});


//console.log('OK');

var express = require("express");
var app = express();
var logger = require('morgan');
app.use(logger("default"));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});