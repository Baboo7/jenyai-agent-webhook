'use strict';

let router = require('express').Router();

const webhook = require('./webhook');

router.post('/', webhook);

module.exports = router;
