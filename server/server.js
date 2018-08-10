const express = require("express");
const app = express();
const path = require('path');
const http = require('http').Server(app);
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../dist/week4/')));

var port = 3000;
var server = http.listen(port, function(){
    var host = server.address().address;
    console.log('Server listening on ' + host + ':' + port);
});

app.post('/login', function(request, response){
    
    if (request.body.username === 'Dylan' && request.body.password === '1234')
    {
        response.send({"ok":true, "userID":1, "username":"Dylan", "userDOB":"04/03/1993", "userAge":25})
    }
    else 
    {
        response.send({'ok':false});
    }
});
