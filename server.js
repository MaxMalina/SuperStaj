//var connect = require('connect');
//var serveStatic = require('serve-static');
//connect().use(serveStatic(__dirname)).listen(8080, function(){
//    console.log('Server running on 80...');
//    response.writeHead(200, {'Content-Type': 'text/plain'});
//    response.write('856912b5');
//    response.end();
//});

var http = require('http');

function onRequest(request, response)
{
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.write('856912b5');
	response.end();
}

http.createServer(onRequest).listen(8888);
console.log('OK');