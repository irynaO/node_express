/**
 * Created by ionyshko on 7/17/18.
 */
var express = require('express');
var app = express();

app.get('/',function(req,res) {
    res.send(200, "Hello World");
});

app.listen(4000);