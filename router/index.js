'use strict'

let router = require('express').Router()

const cards = require('./cards')
const skills = require('./skills')
const webhook = require('./webhook')

router.use('/cards', cards)
router.use('/skills', skills)
router.post('/', webhook)

module.exports = router
