'use strict'

const getCard = require('./getCard')
const wikipedia = require('./wikipedia')

/* In this file are listed all the handled actions and the functions associated.

*/
const actions = {
	getCard: getCard,
	wikipedia: wikipedia
}

module.exports = actions
