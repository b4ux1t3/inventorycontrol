express = require("express");

var app = express();
var port = 8080;
var path = require('path')

app.set('view engine', ejs);
app.set('views', path.resolve(__dirname, 'client', 'views'));

app.get('/', function(req, res){
  res.render('index.ejs');
});

app.listen(port, function(){
  console.log('Server running on port: ' + port);
})
