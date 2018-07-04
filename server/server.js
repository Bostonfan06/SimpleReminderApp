var app = express();
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
var port = process.env.API_PORT || 3000;

app.use(bodyParser.urelencoded({ extended: true}));
app.use(bodyParser.json());

router.get('/', function(req, res){
    res.json({ message: 'API Initialized'})
})

app.use('/api', router);
app.get('/api', function(){
    res.json({ message: 'API Initilized'})
});

app.listen(port, function(){
    console.log('api running on port ${port}');
})