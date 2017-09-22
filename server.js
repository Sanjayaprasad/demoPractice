var express = require('express'),
	bodyParser = require('body-Parser'),
	mongoose = require('mongoose'),
	app = express();

	mongoose.connect('mongodb://localhost:27017');

	var student = mongoose.model('student', mongoose.Schema({
		name:String,
		usn:String
	}));

	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(express.static(__dirname + '/client'));

	app.post('/api/students', function(req,res){
		student.create(req.body, function(err,students){
			if(err){
				res.send(err);
			}
			res.json(students);
		});
	});

	app.get('/api/students', function(req,res){
		student.find(function(err,students){
			if(err)
				res.send(err);
			res.json(students);
		});
	});

	app.listen(3000, function(){
		console.log("Listening on port 3000...!");
	});
