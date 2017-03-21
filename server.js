if (process.env.NODE_ENV === "production") {
  require('dotenv').config();
}

var express = require('express');
var app = express();
var PORT = 4000;
var staticOptions = {
  maxAge: 2592000000 // 30 days
};
// Set up app.
app.set('port', (process.env.PORT || PORT));
app.use(express.static(__dirname + '/dist', staticOptions));
// Set up routes.
app.get('/', function(request, response) {
});
// Start web server and handle errors.
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
}).on('error', function(err) {
  if (err.errno === 'EADDRINUSE') {
    console.log('Error: Express is attempting to bind to port ' + app.get('port') + ', which is currently in use.');
  } else {
    console.log(err);
  }
});
