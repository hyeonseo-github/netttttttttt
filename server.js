const express = require('express');
const app = express();

app.listen(8080,function(){
    console.log('listening on 8080')
});

app.use(express.static('css'));
app.use('/css',express.static('streaming/css'));
app.use('/css',express.static('login/css'));
app.use('/css',express.static('page/css'));
app.use(express.static('img'));

app.get('/', function(요청, 응답){
    응답.sendFile( __dirname + '/index.html');})



app.get('/upload', function(req, res){
    res.sendFile(__dirname + '/streaming/upload.html');})

    app.get('/upload2', function(req, res){
        res.sendFile(__dirname + '/streaming/upload2.html');
    })
    
    app.get('/streaming', function(req, res){
        res.sendFile(__dirname + '/streaming/streaming.html');
    })
    
    app.get('/streamingset', function(req, res){
        res.sendFile(__dirname + '/streaming/streamingset.html');
    })
    
    app.get('/streamboard', function(req, res){
        res.sendFile(__dirname + '/streaming/streamboard.html');
    })

    app.get('/login', function(req, res){
        res.sendFile(__dirname + '/login/login.html');
    })

    app.get('/signup', function(req, res){
        res.sendFile(__dirname + '/login/signup.html');
    })

    app.get('/pageindex', function(req, res){
        res.sendFile(__dirname + '/page/pageindex.html');
    })