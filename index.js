var express = require('express')
var app = express()

app.get('/', function (req,res){
	res.send ('Hola mundo')
})

app.listen(7000, function(){
	console.log('app listening on 7000')
})