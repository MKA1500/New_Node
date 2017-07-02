var express = require('express');
var app = express();

var products = [
    {
        id: 1,
        name: 'tablet'
    },
    {
        id: 2,
        name: 'smartphone'
    }
];

var currentId = 2;

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/products', function(req, res){
    res.send('Success!');
})

app.listen(PORT, function(){
    console.log('Server listening on ' + PORT);
});