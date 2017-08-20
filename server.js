var express = require('express');
var http = require('http');

var app = express();
app.set('port', process.env.PORT ||	 3000);
var server = http.createServer(app);
var io = require('socket.io').listen(server);
server.listen(app.get('port'));

// var server = require('http').Server(app);

var io = require('socket.io').listen(server);



app.get('/',function (req,res) {
	res.sendFile( __dirname+'/index.html');
	// body...
})

app.get('/chat',function (req,res) {
	res.sendFile( __dirname+'/chat.html');
	// body...
})


// app.use()
app.get('/client.js',function(req,res){
	res.sendFile( __dirname+'/client.js');	
})


app.get('/chat.js',function(req,res){
	res.sendFile( __dirname+'/chat.js');	
})

let storage = [];

io.on('connection', function (socket) {
  	

  	socket.on("sendInfo",function(data){
  		console.log("-------------------------------data",data);
  		io.emit("getInfo",{data:data});
  	});

  	socket.on('addUser',function(data){
  		let name = data.name;
  		let obj = {};
  		obj.name = name;
  		obj.conservation = [];
  		storage.push(obj);
  	})
});