var express = require('express')
var app = express()

var fs = require('fs')
var buffer = new Buffer(fs.readFileSync('index.html'))

//var htmlfile = "index.html";
//.createServer(express.logger());

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
    response.send(buffer.toString())
});

//var port = process.env.PORT || 8080
app.listen(app.get('port'), function() {
  console.log("Listening on " + app.get('port'))
});
