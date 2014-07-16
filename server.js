var express = require('express');
var app = express();
var bodyParser = require('body-parser');


var hobbies = ['Rock climbing', 'Running', 'Weight lifting', 'Video games']
var occupations = ['Sales man', 'Programmer', 'EMT']

app.use(bodyParser());

app.get('/name', function(req, res){
  res.send({name: 'Michael Stewart'})
});

app.get('/location', function(req, res){
	res.send({location: 'Orem, Ut.'})
});

app.get('/hobbies', function(req, res){
	 if(req.query.order === 'asc'){
    res.send({hobbies: hobbies.sort()})
  } else if (req.query.order === 'desc'){
    res.send({hobbies: hobbies.sort().reverse()});
  } else {
    res.send({hobbies: hobbies});
  }
});

app.get('/occupations', function(req, res){
	if(req.query.order === 'asc'){
		res.send({occupations: occupations.sort()})
	}	else if (req.query.order === 'desc'){
		res.send({occupations: occupations.sort().reverse()});
	}	else {
		res.send({occupations: occupations});
	}
});

app.listen(3000);
















