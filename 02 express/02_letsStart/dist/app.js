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
app.get('/cats', function (req, res) {
    try {
        var cats = app_model_1.Cat;
        res.status(200).send({
            success: true,
            data: {
                cats: cats,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.get('/cats/:id', function (req, res) {
    try {
        var params_1 = req.params;
        console.log(params_1);
        var cat = app_model_1.Cat.find(function (cat) {
            return cat.id === params_1.id;
        });
        res.status(200).send({
            success: true,
            data: {
                cat: cat,
            },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.use(express.json());
app.post('/cats', function (req, res) {
    try {
        var cats = app_model_1.Cat;
        var data = req.body;
        console.log(data);
        cats.push(data);
        res.status(200).send({
            success: true,
            data: { cats: cats },
        });
    }
    catch (error) {
        res.status(400).send({
            success: false,
            error: error.message,
        });
    }
});
app.use(function (req, res, next) {
    console.log('this is error middle ware');
    res.send({ error: '404 not found error' });
});
//# sourceMappingURL=app.js.map