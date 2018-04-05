
var express = require("express");
var bodyParser = require("body-parser");

var app = express();
var http = require("http").Server(app);
var socketio = require("socket.io")(http);

var mongoose = require("mongoose");

var theDatabaseURL = "mongodb://admin:admin@ds233769.mlab.com:33769/myawesomeproject"

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


mongoose.connect(theDatabaseURL, (err) =>{
	console.log("Success if not", err);
})

var Item = mongoose.model('Item', {
	item: String
});

app.get('/items', (req,res) => {
	Item.find({}, (err, allItems) => {
		res.send(allItems);
	});
});

app.post('/items', (req,res) =>{
	var item = new Item(req.body);

	item.save((err) =>{
		if(err) {
			sendStatus(500);
		} else {
			socketio.emit('broadcast', req.body);
			res.sendStatus(200);
		}
	})

	
});

socketio.on('connection', (socket)=>{
	console.log("Roommate Connected");
});

var server = http.listen(3000, () => {
	console.log("Server running at http://localhost:"+ server.address().port)
});