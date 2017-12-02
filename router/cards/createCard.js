'use strict'

const controller = require('../../database/controllers/cards')

/* Create a card in the database.

	PARAMS
		req (object): request object. Must contain certain properties (see database/controllers/cards.js)
		res (object): response object

	RETURN
		none
*/
const route = (req, res) => {
	let data = {
		src: req.body.src,
		skillId: req.body.skillId
	}

	// Create a card
	controller.createCard(data, (err, card) => {
		if (err) {
			let msg = {
				error: `error while attempting to create card ${data}`
			}

			return res.status(400).json(msg)
		}

		let msg = {
			card: card
		}

		return res.status(200).json(msg)
	})
}

module.exports = route
