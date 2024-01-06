"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
var port = 8000;
app.listen(port, function () {
    console.log("Example app listening on port http://localhost:" + port);
});
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log('this is logging middle ware');
    next();
});
app.get('/', function (req, res) {
    console.log(req.rawHeaders[1]);
    res.send({ Cat: app_model_1.Cat });
});
app.use('/cats', function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log('this is cats middle ware');
    next();
});
app.get('/cats/blue', function (req, res) {
    console.log(req.rawHeaders[1]);
    res.send({ blue: app_model_1.Cat[0] });
});
app.get('/cats/som', function (req, res) {
    console.log(req.rawHeaders[1]);
    res.send({ som: app_model_1.Cat[1] });
});
app.use(function (req, res, next) {
    console.log('this is error middle ware');
    res.send({ error: '404 not found error' });
});
//# sourceMappingURL=app.js.map