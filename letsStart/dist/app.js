"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8000;
app.get('/', function (req, res) {
    res.send({ name: "dohyeon", age: 22, });
});
app.get('/test', function (req, res) {
    res.send({ name: "dohyeon", age: 22, });
});
app.post('/test', function (req, res) {
    res.send({ city: "Seoul" });
});
app.listen(port, function () {
    console.log("Example app listening on port http://localhost:" + port);
});
//# sourceMappingURL=app.js.map