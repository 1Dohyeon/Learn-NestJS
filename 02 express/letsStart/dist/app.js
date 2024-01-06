"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
var port = 8000;
app.listen(port, function () {
    console.log("Example app listening on port http://localhost:" + port);
});
app.get('/', function (req, res) {
    console.log(req);
    res.send({ Cat: app_model_1.Cat });
});
//# sourceMappingURL=app.js.map