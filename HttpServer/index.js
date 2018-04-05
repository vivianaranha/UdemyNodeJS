var http = require("http");

http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type':'text/html'});
	response.end('<html><body>'+request.url+'</body></html>');
	console.log(request.url);
}).listen(3000,'localhost');

console.log('Server Running at http://localhost:3000/');