'use strict';

let router = require('express').Router();

const createCard = require('./createCard');
const deleteCard = require('./deleteCard');
const updateCard = require('./updateCard');
const getCard = require('./getCard');
const getAllCards = require('./getAllCards');

/**** GET ****/

router.get('/', getAllCards);
router.get('/:id', getCard);

/**** POST ****/

router.post('/create', createCard);

router.post('/delete', deleteCard);

router.post('/update', updateCard);

module.exports = router;
