'use strict'

const controller = require('../../database/controllers/cards')

/* Delete a card in the database.

	PARAMS
		req (object): request object. Must contain certain properties (see database/controllers/cards.js)
		res (object): response object

	RETURN
		none
*/
const route = (req, res) => {
	let id = req.body.id

	// Delete the card
	controller.deleteCard(id, (err, card) => {
		if (err) {
			let msg = {
				error: `error while attempting to delete card ${id}`
			}

			return res.status(400).json(msg)
		}

		let msg = { }

		return res.status(200).json(msg)
	})
}

module.exports = route
