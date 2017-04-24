var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(80, function(){
    console.log('Server running on 80...');
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello!\n');
    response.end();
});