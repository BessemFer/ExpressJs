var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParse = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();
var port = process.env.PORT; // environement variable 
/*
var port = process.env.PORT || 3000;
app.listen(port);
*/
app.use('/assets', express.static(__dirname + '/public'));
// create my own middeleware
app.use('/', function (req, res, next) {
//console.log('req Url: ' +req.url);
    next();
});
// setting the engine to use for the app (jade,ejs..)
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
	res.render('index');
});
// use get
app.get('/person/:id', function(req, res) {
    res.render('person', {ID:req.params.id, Qstr: req.query.qstr});
});
// use post
app.post('/person', urlencodedParse,  function(req, res) {
    res.send('thank you');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

// post with json
app.post('/personjson', jsonParser,  function(req, res) {
    res.send('thank you for the json data ');
    console.log(req.body.firstname);
    console.log(req.body.lastname);
});

app.get('/api', function(req, res) {
	res.json({firsname:'bess', lastname:'ferchichi'})
});
app.listen(port || 3000);