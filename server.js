var express = require('express')
var bodyparser = require('body-parser');
var app = express()
var port = process.env.PORT;
app.use(bodyparser());
app.use(express.static('public'));
app.set('view engine','ejs');
// … Configure Express, and register necessary route handlers
app.get('/chat/home',function(req,res){
  res.render('perr');
});
app.get('/chat/:pid',function(req,res){
	console.log('pid :'+req.params.pid)
  res.render('perr2',{id : req.params.pid});
});
app.get('/scall/:pid',function(req,res){
  res.render('call',{id:req.params.pid});
});
app.get('/rcall',function(req,res){
  res.render('receive',{p:port});
});
srv = app.listen(process.env.PORT||8080);

app.use('/peerjs', require('peer').ExpressPeerServer(srv, {
	debug: true
}))
