var dataFile = require('./data.json')
var fs = require('fs')

//console.log(dataFile)

fs.readFile('./data.json','utf-8',(err, data) => {
	var received = JSON.parse(data);
	//console.log(received.address);
})

fs.readdir('../', (err,data) => {
	//console.log(data);
})

var sayHello = "How are you";

var obj = {"name":"Vivian Aranha", "address":"123 Main St"};

fs.writeFile('myFileObj.json', JSON.stringify(obj), (err) => {
	console.log("Success", err)
});









