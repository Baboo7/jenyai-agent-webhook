'use strict'

const controller = require('../../database/controllers/cards')

/* Get all cards from the database.

	PARAMS
		req (object): request object. Must contain certain properties (see database/controllers/cards.js)
		res (object): response object

	RETURN
		none
*/
const route = (req, res) => {
	// Get all the cards
	controller.getAllCards((err, cards) => {
		if (err) {
			let msg = {
				error: `error while attempting to get all cards`
			}

			return res.status(400).json(msg)
		}

		let msg = {
			cards: cards
		}

		return res.status(200).json(msg)
	})
}

module.exports = route
