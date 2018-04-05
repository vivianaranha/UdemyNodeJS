var connect = require("connect");
var serveStatic = require("serve-static");

var app = connect()
			.use(serveStatic('public'))
			.use(function(req, res){
				res.end("Not Found");
			}).listen(3000);