/* Chatroom app! But unless there are sockets you just push enter to nothing :( */

var express = require('express');
/* 1 */
//this is the other side of io that allows the server to connect to the front --> websocket	
var socketio = require('socket.io');

var server = require('http').createServer();
var app = express();

server.listen(1337, function () {
    console.log('Server on port 1337');
});

server.on('request', app);

app.use(express.static(__dirname));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

/* 2 */
//wrap http server with socket io to piggy back on connection to the client --> how we can make the front end io connect to the backend io!
var io = socketio(server);

/* 3 */
io.on('connection', function (socket) { 
	//socket is a single connection. It means one client who connected to this server.

  socket.on('newMessage', function (message) {
      io.sockets.emit('chatMessage', message); //emits this to all sockets connected to io
  });

});












