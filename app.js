var express = require('express');
var app = express();
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var path = require('path');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html' );
});

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', function(socket){
    console.log('user connected');

    socket.on('chat message', function( msg ) {
        io.emit('chat message', msg);
    });
});

http.listen(3000, function() {
    console.log('go to "http://localhost:3000" ');

})