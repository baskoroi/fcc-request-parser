'use strict';

var express = require('express');
var app = express();

var routes = require('./routes/index.js');
routes(app);

var PORT = process.env.PORT || 8080;
app.listen(PORT, function() {
    console.log('Server listening at port ' + PORT);
});