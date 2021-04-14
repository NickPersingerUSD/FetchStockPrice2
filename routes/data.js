'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    let x = new Array();
    for (let i = 0; i < 50; i++) {
        x[i] = Math.random() * 200;
    }
    res.send(x);
});

module.exports = router;