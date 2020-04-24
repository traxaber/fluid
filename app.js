const express = require('express');

var app = express();
const port = process.env.PORT || 5000;
const http = require('http').Server(app);

app.use(express.static(__dirname + '/public'));
app.get('/',function(req,res) {
    res.sendFile(__dirname + '/main.html');
});

http.listen(port);

console.log('Running on port ' + port);