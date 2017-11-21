'use strict';

let router = require('express').Router();

const skills = require('./skills');
const webhook = require('./webhook');

router.use('/skills', skills);
router.post('/', webhook);

module.exports = router;
