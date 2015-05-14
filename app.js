var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html' );
});

io.on('connection', function(socket){
   console.log('user connected');
});

app.listen(3000, function() {
    console.log('App listening on port 3000: go to "http://localhost:3000" ')
});