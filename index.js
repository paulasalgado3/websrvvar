var express = require('express')
var app = express()

app.get('/', function (req,res){
	res.send (
		"<html><head></head><body>Hola "+process.env.NOMBRE+"!!! Puerto:"+process.env.PUERTO+"<script>document.body.style.backgroundColor='"+process.env.COLOR+"';</script></body></html>")
})
app.listen(process.env.PUERTO, function(){
	console.log('app listening on '+process.env.PUERTO )
})
