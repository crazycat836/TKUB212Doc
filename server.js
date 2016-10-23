// set up ========================
var express = require('express');
var app = express();                                    // create our app  express
var port     = process.env.PORT || 8080;                // set the port
var morgan = require('morgan');                         // log requests to the console (express4)
//var methodOverride = require('method-override');        // simulate DELETE and PUT (express4)

// configuration =================

app.use(express.static(__dirname + '/build'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
//app.use(bodyParser.urlencoded({'extended': 'true'}));           // parse application/x-www-form-urlencoded
//app.use(bodyParser.json());                                     // parse application/json
//app.use(bodyParser.json({type: 'application/vnd.api+json'}));   // parse application/vnd.api+json as json
//app.use(methodOverride());

//load routes======================================
//
app.get('/', function(req, res){
    res.sendfile('./build/htmls/index.html');// load the single view file
});


// listen (start app ) ======================================
app.listen(port);

console.log("App listening on port " + port);
