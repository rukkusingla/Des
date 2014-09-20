var fs = require('fs');
var json = JSON.parse(fs.readFileSync('config.txt'));
var port = json.Port;
var host = json.Host;
var express = require('express');
var callerCatDetails = require('./caller.js');
var bodyParser = require('body-parser')

var app = express.createServer();
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(app.router);
app.use(express.static(__dirname + '/'));
app.set('views', __dirname + '/');
app.engine('html', require('ejs').renderFile);
app.set('view engine','jade');

app.get("/",function(request,response){
	response.render('inde.html');
});

app.post("/home",function(request,response){
	var username = request.body.username;
	var password = request.body.password;
	callerCatDetails.getEntireDetails(username,password,function(Results){
		console.log(Results);
		response.render('mapTest',{Results:Results,username:username});
		//response.json(Results);
	});
});

app.listen(port,host);