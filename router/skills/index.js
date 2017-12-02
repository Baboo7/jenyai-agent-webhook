'use strict'

let router = require('express').Router()

const createSkill = require('./createSkill')
const deleteSkill = require('./deleteSkill')
const updateSkill = require('./updateSkill')
const getSkill = require('./getSkill')
const getAllSkills = require('./getAllSkills')

/** ** GET ****/

router.get('/', getAllSkills)
router.get('/:id', getSkill)

/** ** POST ****/

router.post('/create', createSkill)

router.post('/delete', deleteSkill)

router.post('/update', updateSkill)

module.exports = router
